import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ja";

interface Translations {
  header: {
    title: string;
    subtitle: string;
  };
  currentStatus: {
    title: string;
    location: string;
    humidity: string;
    temperature: string;
    riskLevel: string;
    low: string;
    medium: string;
    high: string;
  };
  aiAdvice: {
    title: string;
  };
  userInput: {
    title: string;
    clothingLabel: string;
    clothingPlaceholder: string;
    zapButton: string;
    zapDescription: string;
    materials: {
      cotton: string;
      wool: string;
      polyester: string;
      fleece: string;
      silk: string;
      nylon: string;
      leather: string;
    };
  };
  history: {
    title: string;
    noIncidents: string;
    dateTime: string;
    humidity: string;
    temperature: string;
    clothing: string;
  };
  toast: {
    logged: string;
    description: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    header: {
      title: "Static Electricity Predictor GPT",
      subtitle: "Matsue's Winter Static Shield",
    },
    currentStatus: {
      title: "Current Status",
      location: "Observation Point",
      humidity: "Humidity",
      temperature: "Temperature",
      riskLevel: "Static Risk Level",
      low: "LOW",
      medium: "MEDIUM",
      high: "HIGH",
    },
    aiAdvice: {
      title: "AI Advice",
    },
    userInput: {
      title: "Your Activity",
      clothingLabel: "Current Clothing Material",
      clothingPlaceholder: "Select material",
      zapButton: "I got ZAPPED! ⚡",
      zapDescription: "Log a static shock incident",
      materials: {
        cotton: "Cotton (Low Risk)",
        wool: "Wool (Medium Risk)",
        polyester: "Polyester (High Risk)",
        fleece: "Fleece (High Risk)",
        silk: "Silk (Low Risk)",
        nylon: "Nylon (High Risk)",
        leather: "Leather (Low Risk)",
      },
    },
    history: {
      title: "Recent Incidents",
      noIncidents: "No incidents logged yet. Stay safe!",
      dateTime: "Date & Time",
      humidity: "Humidity",
      temperature: "Temp",
      clothing: "Clothing",
    },
    toast: {
      logged: "⚡ Incident logged!",
      description: "Static shock recorded at",
    },
  },
  ja: {
    header: {
      title: "静電気予測GPT",
      subtitle: "松江の冬 静電気シールド",
    },
    currentStatus: {
      title: "現在の状況",
      location: "観測地点",
      humidity: "湿度",
      temperature: "気温",
      riskLevel: "静電気リスクレベル",
      low: "低",
      medium: "中",
      high: "高",
    },
    aiAdvice: {
      title: "AIアドバイス",
    },
    userInput: {
      title: "あなたの活動",
      clothingLabel: "現在の衣服の素材",
      clothingPlaceholder: "素材を選択",
      zapButton: "バチッときた！⚡",
      zapDescription: "静電気ショックを記録",
      materials: {
        cotton: "綿（低リスク）",
        wool: "ウール（中リスク）",
        polyester: "ポリエステル（高リスク）",
        fleece: "フリース（高リスク）",
        silk: "シルク（低リスク）",
        nylon: "ナイロン（高リスク）",
        leather: "革（低リスク）",
      },
    },
    history: {
      title: "最近の記録",
      noIncidents: "まだ記録がありません。気をつけてね！",
      dateTime: "日時",
      humidity: "湿度",
      temperature: "気温",
      clothing: "衣服",
    },
    toast: {
      logged: "⚡ 記録しました！",
      description: "静電気ショックを記録:",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
