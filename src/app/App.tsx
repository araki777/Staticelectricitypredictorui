import { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { CurrentStatus } from "./components/CurrentStatus";
import { AIAdvice } from "./components/AIAdvice";
import { UserInput } from "./components/UserInput";
import { History, ZapIncident } from "./components/History";
import { ClothingRegistration, ClothingItem } from "./components/ClothingRegistration";
import { toast, Toaster } from "sonner";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { RiskLevel, Station, WeatherData } from "./types/weather";

function AppContent({ 
  points, 
  selectedPoint, 
  setSelectedPoint 
}: { 
  points: Station[]; 
  selectedPoint: string; 
  setSelectedPoint: (code: string) => void;
}) {
  const { language, t } = useLanguage();
  const [clothingMaterial, setClothingMaterial] = useState("polyester");
  const [incidents, setIncidents] = useState<ZapIncident[]>([]);
  
  // AMeDAS State (Lifted but remaining status info)
  const [humidity, setHumidity] = useState<number | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>("LOW");
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // User Profile State
  const [currentUser, setCurrentUser] = useState<string>(() => {
    return localStorage.getItem("current_user") || "Default";
  });
  const [availableUsers, setAvailableUsers] = useState<string[]>(() => {
    const saved = localStorage.getItem("available_users");
    return saved ? JSON.parse(saved) : ["Default"];
  });

  // Clothing Registration State
  const [registeredClothes, setRegisteredClothes] = useState<ClothingItem[]>([]);
  const [showRegistration, setShowRegistration] = useState(false);

  // Load data from Backend based on currentUser
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clothesRes, incidentsRes] = await Promise.all([
          fetch(`/api/clothing?userName=${encodeURIComponent(currentUser)}`),
          fetch(`/api/zap?userName=${encodeURIComponent(currentUser)}`)
        ]);

        if (clothesRes.ok) {
          const clothesData = await clothesRes.json();
          setRegisteredClothes(clothesData);
        } else {
          throw new Error('Failed to fetch clothing data');
        }

        if (incidentsRes.ok) {
          const incidentsData = await incidentsRes.json();
          setIncidents(incidentsData);
        } else {
          throw new Error('Failed to fetch zap data');
        }
      } catch (e) {
        console.error("Failed to load data from backend", e);
        toast.error(language === "ja" ? "データの取得に失敗しました" : "Failed to load data");
      }
    };
    fetchData();
  }, [currentUser, language]);


  // Sync users to localStorage
  useEffect(() => {
    localStorage.setItem("current_user", currentUser);
    localStorage.setItem("available_users", JSON.stringify(availableUsers));
  }, [currentUser, availableUsers]);

  const handleRegisterClothing = async (item: ClothingItem) => {
    try {
      const response = await fetch('/api/clothing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...item, userName: currentUser }),
      });

      if (response.ok) {
        setRegisteredClothes([item, ...registeredClothes]);
        setShowRegistration(false);
        setClothingMaterial(`custom-${item.id}`);
      } else {
        throw new Error('Failed to register clothing');
      }
    } catch (e) {
      console.error(e);
      toast.error(language === "ja" ? "保存に失敗しました" : "Failed to save");
    }
  };



  // AIアドバイスを取得する関数
  const fetchAIAdvice = async (h: number, temp: number) => {
    setAiLoading(true);
    setAiError(null);
    try {
      const response = await fetch('/api/ai/advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ humidity: h, temperature: temp }),
      });
      const data = await response.json();
      if (data.advice) {
        setAiAdvice(data.advice);
      } else if (data.error) {
        setAiError(data.error);
      }
    } catch (err) {
      console.error('Failed to fetch AI advice:', err);
      setAiError('AI連携に失敗しました');
    } finally {
      setAiLoading(false);
    }
  };

  // Fetch AMeDAS Table (Lifted to App)

  const fetchWeatherData = useCallback(async (code: string, material: string) => {
    setLoading(true);
    try {
      // 素材情報をクエリパラメータとして渡す
      let materialParam = material;
      if (material.startsWith("custom-")) {
        const customId = material.replace("custom-", "");
        const item = registeredClothes.find(c => c.id === customId);
        if (item && item.materials.length > 0) {
          // 最も割合の高い素材を使用
          materialParam = item.materials.reduce((prev, current) => (prev.percent > current.percent) ? prev : current).name;
        }
      }

      const response = await fetch(`/api/jma/weather/${code}?material=${encodeURIComponent(materialParam)}`);
      if (!response.ok) throw new Error('Failed to fetch weather');
      const data: WeatherData = await response.json();
      
      setHumidity(data.humidity);
      setTemperature(data.temperature);
      setRiskLevel(data.riskLevel);
      
      if (data.humidity !== null && data.temperature !== null) {
        // fetchAIAdvice(data.humidity, data.temperature); // 自動取得を停止
      }
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      toast.error(language === "ja" ? "気象データの取得に失敗しました" : "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  }, [language, registeredClothes]);

  useEffect(() => {
    fetchWeatherData(selectedPoint, clothingMaterial);
  }, [selectedPoint, clothingMaterial, fetchWeatherData]);

  const handleGetAdvice = () => {
    if (humidity !== null && temperature !== null) {
      fetchAIAdvice(humidity, temperature);
    } else {
      toast.error(language === "ja" ? "気象データを先に読み込んでください" : "Please load weather data first");
    }
  };

  const handleZapped = async () => {
    const curHumidity = humidity ?? 30;
    const curTemperature = temperature ?? 10;
    const now = new Date();

    let displayClothing = clothingMaterial;
    if (clothingMaterial.startsWith("custom-")) {
      const item = registeredClothes.find(c => c.id === clothingMaterial.replace("custom-", ""));
      displayClothing = item ? item.name : clothingMaterial;
    }

    const newIncident: ZapIncident = {
      id: Date.now().toString(),
      date: now.toISOString().split("T")[0],
      time: now.toLocaleTimeString(language === "ja" ? "ja-JP" : "en-US", { hour: "2-digit", minute: "2-digit", hour12: false }),
      humidity: curHumidity,
      temperature: curTemperature,
      clothing: displayClothing.charAt(0).toUpperCase() + displayClothing.slice(1),
    };

    try {
      const response = await fetch('/api/zap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newIncident, userName: currentUser }),
      });

      if (response.ok) {
        setIncidents([newIncident, ...incidents]);
        toast.success(t.toast.logged, { description: `${t.toast.description} ${newIncident.time}` });
      } else {
        throw new Error('Failed to save incident');
      }
    } catch (e) {
      console.error(e);
      toast.error(language === "ja" ? "保存に失敗しました" : "Failed to save");
    }
  };

  return (
    <div className="dark min-h-screen bg-slate-950 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Header 
        currentUser={currentUser} 
        availableUsers={availableUsers} 
        onUserChange={setCurrentUser}
        onAddUser={(name) => setAvailableUsers([...availableUsers, name])}
      />

      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-8">
          {/* Current Status Section */}
          <CurrentStatus
            location={t.currentStatus.location}
            humidity={humidity}
            temperature={temperature}
            riskLevel={riskLevel}
            selectedPoint={selectedPoint}
            onPointChange={setSelectedPoint}
            points={points}
            loading={loading}
          />

          {/* AI Advice Section */}
          <AIAdvice 
            advice={aiAdvice} 
            loading={aiLoading} 
            error={aiError} 
            onRefresh={handleGetAdvice}
            canRefresh={!loading && humidity !== null}
          />

          {/* User Input Section */}
          <UserInput
            clothingMaterial={clothingMaterial}
            onClothingChange={setClothingMaterial}
            onZapped={handleZapped}
            registeredClothes={registeredClothes}
            onAddClick={() => setShowRegistration(true)}
          />

          {/* History Section */}
          <History incidents={incidents} />
        </div>
      </main>

      {/* Registration Modal Overlay */}
      {showRegistration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-lg">
            <ClothingRegistration 
              onRegister={handleRegisterClothing} 
              onCancel={() => setShowRegistration(false)} 
            />
          </div>
        </div>
      )}

      <Toaster position="top-right" theme="dark" />
    </div>
  );
}

function App() {
  const [points, setPoints] = useState<Station[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<string>("44132"); // Default: Tokyo

  // Fetch AMeDAS Table for points
  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch('/api/jma/stations');
        if (!response.ok) throw new Error('Failed to fetch stations');
        const data: Station[] = await response.json();
        setPoints(data);
      } catch (error) {
        console.error("Failed to fetch AMeDAS stations:", error);
        setPoints([{ code: "44132", name: "東京", kana: "トウキョウ" }]);
      }
    };
    fetchStations();
  }, []);

  const selectedPointObj = points.find((p) => p.code === selectedPoint);
  const selectedPointName = selectedPointObj ? selectedPointObj.name : "";

  return (
    <LanguageProvider locationName={selectedPointName}>
      <AppContent 
        points={points} 
        selectedPoint={selectedPoint} 
        setSelectedPoint={setSelectedPoint} 
      />
    </LanguageProvider>
  );
}

export default App;