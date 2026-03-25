import * as React from "react";
import { Sparkles, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "../context/LanguageContext";

interface AIAdviceProps {
  advice: string | null;
  loading: boolean;
  error?: string | null;
  onRefresh?: () => void;
  canRefresh?: boolean;
}

export function AIAdvice({ advice, loading, error, onRefresh, canRefresh = true }: AIAdviceProps) {
  const { language, t } = useLanguage();

  return (
    <Card className="relative overflow-hidden border-indigo-500/30 bg-slate-800/50 p-6 shadow-xl backdrop-blur-sm">
      {/* Decorative gradient overlay */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-indigo-500/20 p-2">
              <Sparkles className="h-5 w-5 text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Meteor AI Advisor
            </h3>
          </div>
          
          {canRefresh && !loading && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onRefresh}
              className="h-8 border-indigo-500/50 bg-indigo-500/10 text-[10px] text-indigo-300 hover:bg-indigo-500/20"
            >
              <RefreshCw className="mr-1.5 h-3 w-3" />
              {language === "ja" ? "アドバイスをもらう" : "Get Advice"}
            </Button>
          )}
        </div>

        <div className="min-h-[60px] flex items-center">
          {loading ? (
            <div className="flex w-full flex-col space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-slate-700/50"></div>
              <div className="h-4 w-3/4 animate-pulse rounded bg-slate-700/50"></div>
              <div className="flex items-center gap-2 text-xs text-indigo-400/70 mt-2">
                <Loader2 className="h-3 w-3 animate-spin" />
                <span>{language === "ja" ? "アドバイスを生成中..." : "Generating advice..."}</span>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-start gap-2 text-red-400">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm leading-relaxed">{error}</p>
            </div>
          ) : advice ? (
            <p className="text-sm leading-relaxed text-slate-200">
              {advice}
            </p>
          ) : (
            <p className="text-sm italic text-slate-500">
              {language === "ja" ? "「アドバイスをもらう」ボタンを押すと、現在の気象状況に基づいたアドバイスを生成します。" : "Click 'Get Advice' to generate AI advice based on current weather."}
            </p>
          )}
        </div>

        {(loading || advice) && (
          <div className="flex justify-end pt-2">
            <span className="text-[10px] text-slate-500 italic">
              Powered by Google Gemini
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}