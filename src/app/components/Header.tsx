import { Zap, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  return (
    <header className="border-b border-slate-600 bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 shadow-md">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {t.header.title}
              </h1>
              <p className="text-sm text-slate-300">
                {t.header.subtitle}
              </p>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="border-slate-500 bg-slate-700 text-white hover:bg-slate-600 hover:text-white"
          >
            <Languages className="mr-2 h-4 w-4" />
            {language === "en" ? "日本語" : "English"}
          </Button>
        </div>
      </div>
    </header>
  );
}