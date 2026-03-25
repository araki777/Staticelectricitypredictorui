import { Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../context/LanguageContext";

interface AIAdviceProps {
  advice: string;
}

export function AIAdvice({ advice }: AIAdviceProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">{t.aiAdvice.title}</h2>
      
      <Card className="border-slate-600 bg-gradient-to-br from-purple-800 to-blue-800 p-6 shadow-lg">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-400/30 shadow">
              <Sparkles className="h-5 w-5 text-purple-200" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-white">
              {advice}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}