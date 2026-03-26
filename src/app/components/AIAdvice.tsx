import * as React from "react";
import { Sparkles, Loader2, AlertCircle, RefreshCw, Zap } from "lucide-react";
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
  const { language } = useLanguage();

  return (
    <Card className="relative overflow-hidden border-slate-500/30 bg-slate-800/40 p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 group">
      {/* Dynamic background glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50"></div>
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50"></div>

      <div className="relative flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-md rounded-full animate-pulse"></div>
              <div className="relative rounded-xl bg-indigo-500/20 p-2.5 border border-indigo-500/30">
                <Sparkles className="h-5 w-5 text-indigo-300" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-black text-white tracking-tight flex items-center gap-2">
                Meteor AI Advisor
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-widest font-bold">Pro</span>
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Real-time Analysis</p>
            </div>
          </div>

          {canRefresh && !loading && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRefresh}
              className="h-9 border-indigo-500/40 bg-indigo-500/5 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all shadow-inner px-4 rounded-full"
            >
              {advice ? (
                <>
                  <RefreshCw className="mr-2 h-3.5 w-3.5" />
                  {language === "ja" ? "再生成" : "Refresh"}
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  {language === "ja" ? "アドバイスをもらう" : "Get Advice"}
                </>
              )}
            </Button>
          )}
        </div>

        <div className="min-h-[80px] flex items-center relative">
          {loading ? (
            <div className="flex w-full flex-col space-y-3">
              <div className="h-3 w-full animate-pulse rounded-full bg-slate-700/50"></div>
              <div className="h-3 w-5/6 animate-pulse rounded-full bg-slate-700/50"></div>
              <div className="h-3 w-4/6 animate-pulse rounded-full bg-slate-700/50 text-right"></div>
              <div className="flex items-center gap-3 text-xs text-indigo-400 font-bold mt-4 bg-indigo-500/5 w-fit px-3 py-1.5 rounded-lg border border-indigo-500/20">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="uppercase tracking-widest">{language === "ja" ? "アドバイスを生成中..." : "Synthesizing Advice..."}</span>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 w-full shadow-inner">
              <AlertCircle className="h-6 w-6 shrink-0" />
              <div className="space-y-1">
                <p className="font-bold text-xs uppercase tracking-widest">System Error</p>
                <p className="text-sm leading-relaxed">{error}</p>
              </div>
            </div>
          ) : advice ? (
            <div className="relative group/text">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-indigo-500/30 rounded-full group-hover/text:bg-indigo-500/60 transition-colors"></div>
              <p className="text-sm leading-relaxed text-slate-100 font-medium pl-2 drop-shadow-sm">
                {advice}
              </p>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-6 bg-slate-900/30 rounded-2xl border border-dashed border-slate-700/50 group/init cursor-pointer hover:bg-slate-900/50 transition-colors" onClick={onRefresh}>
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover/init:scale-150 transition-transform"></div>
                <Zap className="h-10 w-10 text-indigo-400/50 relative z-10 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
              <p className="text-sm font-bold text-slate-400 max-w-[280px] text-center px-4 leading-relaxed group-hover/init:text-slate-300 transition-colors">
                {language === "ja"
                  ? "最新の気象データから静電気を防ぐためのパーソナライズされたアドバイスを生成します。"
                  : "Generate personalized static prevention advice based on current weather data."}
              </p>
              <span className="mt-4 text-[10px] text-indigo-400 font-black uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover/init:opacity-100 transition-opacity">
                Click to generate <Sparkles className="h-3 w-3" />
              </span>
            </div>
          )}
        </div>

        {(loading || advice) && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="h-1 w-4 rounded-full bg-indigo-500/20"></div>)}
            </div>
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
              gemini-3-flash-preview
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}