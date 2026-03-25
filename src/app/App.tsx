import { useState } from "react";
import { Header } from "./components/Header";
import { CurrentStatus } from "./components/CurrentStatus";
import { AIAdvice } from "./components/AIAdvice";
import { UserInput } from "./components/UserInput";
import { History, ZapIncident } from "./components/History";
import { toast, Toaster } from "sonner";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

// Mock data
const MOCK_HUMIDITY = 35;
const MOCK_TEMPERATURE = 8;
const MOCK_RISK_LEVEL: "LOW" | "MEDIUM" | "HIGH" = "HIGH";

const MOCK_AI_ADVICE = {
  en: "⚠️ High static risk detected! Humidity is at 35% and you're wearing polyester. Touch a grounded metal surface (like a wall or wooden surface) before touching doorknobs or other people. Consider applying hand lotion to increase skin moisture.",
  ja: "⚠️ 高い静電気リスクが検出されました！湿度が35%で、ポリエステルを着用しています。ドアノブや他の人に触れる前に、壁や木製の表面など接地された金属面に触れてください。肌の水分を増やすためにハンドローションの使用も検討してください。"
};

const MOCK_INCIDENTS: ZapIncident[] = [
  {
    id: "1",
    date: "2026-03-24",
    time: "14:30",
    humidity: 32,
    temperature: 7,
    clothing: "Wool",
  },
  {
    id: "2",
    date: "2026-03-23",
    time: "09:15",
    humidity: 28,
    temperature: 6,
    clothing: "Polyester",
  },
  {
    id: "3",
    date: "2026-03-22",
    time: "18:45",
    humidity: 30,
    temperature: 8,
    clothing: "Fleece",
  },
];

function AppContent() {
  const { language, t } = useLanguage();
  const [clothingMaterial, setClothingMaterial] = useState("polyester");
  const [incidents, setIncidents] = useState<ZapIncident[]>(MOCK_INCIDENTS);

  const handleZapped = () => {
    // Create new incident
    const now = new Date();
    const newIncident: ZapIncident = {
      id: Date.now().toString(),
      date: now.toISOString().split("T")[0],
      time: now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false 
      }),
      humidity: MOCK_HUMIDITY,
      temperature: MOCK_TEMPERATURE,
      clothing: clothingMaterial.charAt(0).toUpperCase() + clothingMaterial.slice(1),
    };

    // Add to beginning of list
    setIncidents([newIncident, ...incidents]);

    // Show success toast
    toast.success(t.toast.logged, {
      description: `${t.toast.description} ${newIncident.time}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Current Status Section */}
          <CurrentStatus
            location={t.currentStatus.location}
            humidity={MOCK_HUMIDITY}
            temperature={MOCK_TEMPERATURE}
            riskLevel={MOCK_RISK_LEVEL}
          />

          {/* AI Advice Section */}
          <AIAdvice advice={MOCK_AI_ADVICE[language]} />

          {/* User Input Section */}
          <UserInput
            clothingMaterial={clothingMaterial}
            onClothingChange={setClothingMaterial}
            onZapped={handleZapped}
          />

          {/* History Section */}
          <History incidents={incidents} />
        </div>
      </main>

      <Toaster 
        position="top-right" 
        theme="dark"
        toastOptions={{
          style: {
            background: '#334155',
            color: '#f1f5f9',
            border: '1px solid #475569',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;