import { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { CurrentStatus } from "./components/CurrentStatus";
import { AIAdvice } from "./components/AIAdvice";
import { RankingBoard } from "./components/RankingBoard";
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
  const [humidity, setHumidity] = useState<number | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>("LOW");
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [ranking, setRanking] = useState<any[]>([]);

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
        }
        if (incidentsRes.ok) {
          const incidentsData = await incidentsRes.json();
          setIncidents(incidentsData);
        }
      } catch (e) {
        console.error("Failed to load data from backend", e);
      }
    };
    fetchData();
  }, [currentUser]);

  // Sync users to localStorage
  useEffect(() => {
    localStorage.setItem("current_user", currentUser);
    localStorage.setItem("available_users", JSON.stringify(availableUsers));
  }, [currentUser, availableUsers]);

  // Fetch Weather Data
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/jma/weather/${selectedPoint}${clothingMaterial ? `?material=${clothingMaterial}` : ""}`);
        if (!response.ok) throw new Error("Failed to fetch weather");
        const data = await response.json();
        setHumidity(data.humidity);
        setTemperature(data.temperature);
        setRiskLevel(data.riskLevel);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [selectedPoint, clothingMaterial]);

  // Fetch Rankings for City Rank
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await fetch("/api/jma/ranking");
        if (response.ok) {
          const data = await response.json();
          setRanking(data);
        }
      } catch (error) {
        console.error("Failed to fetch ranking:", error);
      }
    };
    fetchRanking();
  }, []);

  const selectedCityRank = ranking.findIndex(r => r.code === selectedPoint) + 1;

  const handleGetAdvice = async () => {
    if (humidity === null) return;
    setAiLoading(true);
    setAiError(null);
    try {
      const response = await fetch("/api/ai/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ humidity, temperature, material: clothingMaterial }),
      });
      const data = await response.json();
      if (data.advice) {
        setAiAdvice(data.advice);
      } else if (data.details) {
        setAiError(data.details);
      }
    } catch (err: any) {
      setAiError(err.message);
    } finally {
      setAiLoading(false);
    }
  };


  const handleZapped = async () => {
    const now = new Date();
    const newIncident: ZapIncident = {
      id: Date.now().toString(),
      date: now.toISOString().split("T")[0],
      time: now.toLocaleTimeString(language === "ja" ? "ja-JP" : "en-US", { hour: "2-digit", minute: "2-digit", hour12: false }),
      humidity: humidity || 0,
      temperature: temperature || 0,
      clothing: clothingMaterial,
    };

    try {
      const response = await fetch('/api/zap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newIncident, userName: currentUser }),
      });

      if (response.ok) {
        setIncidents([newIncident, ...incidents]);
        toast.error("バチッときた！⚡ 記録しました。");
      }
    } catch (e) {
      console.error(e);
    }
  };

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
        toast.success("新しい服を登録しました！");
      }
    } catch (e) {
      console.error(e);
      toast.error(language === "ja" ? "保存に失敗しました" : "Failed to save");
    }
  };

  return (
    <div className="dark min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-slate-100 pb-20">
      <Header 
        currentUser={currentUser} 
        availableUsers={availableUsers} 
        onUserChange={setCurrentUser}
        onAddUser={(name) => setAvailableUsers([...availableUsers, name])}
      />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Status & Insights (col-span-3) */}
          <section className="lg:col-span-3 space-y-8 animate-in slide-in-from-left duration-500">
            <CurrentStatus
              location={t.currentStatus.location}
              humidity={humidity}
              temperature={temperature}
              riskLevel={riskLevel}
              selectedPoint={selectedPoint}
              onPointChange={setSelectedPoint}
              points={points}
              loading={loading}
              rank={selectedCityRank > 0 ? selectedCityRank : undefined}
            />
          </section>

          {/* Middle Column: Interaction & History (col-span-5) */}
          <section className="lg:col-span-5 space-y-8 animate-in fade-in duration-700">
            <AIAdvice 
              advice={aiAdvice} 
              loading={aiLoading} 
              error={aiError} 
              onRefresh={handleGetAdvice}
              canRefresh={!loading && humidity !== null}
            />
            
            <UserInput
              clothingMaterial={clothingMaterial}
              onClothingChange={setClothingMaterial}
              onZapped={handleZapped}
              registeredClothes={registeredClothes}
              onAddClick={() => setShowRegistration(true)}
            />

            <History incidents={incidents} />
          </section>

          {/* Right Column: Global Ranking (col-span-4) */}
          <section className="lg:col-span-4 animate-in slide-in-from-right duration-500">
            <RankingBoard />
          </section>
        </div>
      </main>

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