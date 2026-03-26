import { useEffect, useState } from "react";
import { Trophy, Thermometer, Droplets, Loader2, AlertTriangle, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../context/LanguageContext";

interface RankingItem {
  code: string;
  name: string;
  humidity: number;
  temperature: number;
  riskScore: number;
  riskLevel: "LOW" | "MEDIUM" | "HIGH";
}

export function RankingBoard() {
  const { language } = useLanguage();
  const [ranking, setRanking] = useState<RankingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await fetch("/api/jma/ranking");
        if (!response.ok) throw new Error("Failed to fetch ranking");
        const data = await response.json();
        setRanking(data.slice(0, 10)); // Top 10
      } catch (err) {
        console.error(err);
        setError(language === "ja" ? "ランキングの取得に失敗しました" : "Failed to fetch ranking");
      } finally {
        setLoading(false);
      }
    };
    fetchRanking();
  }, [language]);

  if (loading) {
    return (
      <Card className="border-slate-500/20 bg-slate-800/30 backdrop-blur-md p-12 flex flex-col items-center justify-center gap-4 shadow-xl">
        <Loader2 className="h-10 w-10 animate-spin text-blue-400" />
        <p className="text-slate-400 font-medium animate-pulse">
          {language === "ja" ? "全国の状況を解析中..." : "Analyzing national status..."}
        </p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-red-500/30 bg-red-500/5 backdrop-blur-sm p-6 flex flex-col items-center gap-3 shadow-lg">
        <AlertTriangle className="text-red-400 h-8 w-8" />
        <p className="text-red-200 font-medium">{error}</p>
      </Card>
    );
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case "HIGH": return "text-red-400 bg-red-400/10 border-red-400/20";
      case "MEDIUM": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "LOW": return "text-green-400 bg-green-400/10 border-green-400/20";
      default: return "text-slate-400 bg-slate-400/10 border-slate-400/20";
    }
  };

  const getRankBadgeStyle = (index: number) => {
    switch (index) {
      case 0: return "bg-gradient-to-br from-yellow-300 to-yellow-600 text-slate-950 shadow-[0_0_15px_rgba(234,179,8,0.4)]";
      case 1: return "bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900 shadow-[0_0_15px_rgba(148,163,184,0.3)]";
      case 2: return "bg-gradient-to-br from-amber-500 to-amber-800 text-white shadow-[0_0_15px_rgba(180,83,9,0.3)]";
      default: return "bg-slate-700/50 text-slate-300 border border-slate-600";
    }
  };

  return (
    <Card className="border-slate-500/30 bg-slate-800/40 backdrop-blur-md overflow-hidden shadow-2xl relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-50" />

      <div className="p-5 border-b border-slate-500/20 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <Trophy className="h-5 w-5 text-yellow-400 shadow-sm" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              {language === "ja" ? "全国静電気リスクランキング" : "Japan Static Risk Ranking"}
            </h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Live Monitoring • Top 10</p>
          </div>
        </div>
        <TrendingUp className="h-4 w-4 text-blue-400/50" />
      </div>

      <div className="divide-y divide-slate-500/10">
        {ranking.map((item, index) => (
          <div
            key={item.code}
            className="group flex items-center justify-between p-4 hover:bg-white/5 transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-4">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-black text-sm italic transition-transform group-hover:scale-110 duration-300 ${getRankBadgeStyle(index)}`}>
                {index + 1}
              </span>
              <div>
                <p className="font-bold text-slate-100 group-hover:text-white transition-colors text-lg tracking-tight">{item.name}</p>
                <div className="flex items-center gap-4 text-xs mt-0.5">
                  <span className="flex items-center gap-1.5 text-blue-400/80 font-medium">
                    <Droplets className="h-3.5 w-3.5" />
                    {item.humidity}%
                  </span>
                  <span className="flex items-center gap-1.5 text-orange-400/80 font-medium">
                    <Thermometer className="h-3.5 w-3.5" />
                    {item.temperature}°C
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1.5">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-black uppercase tracking-tighter shadow-sm transition-all group-hover:shadow-md ${getRiskColor(item.riskLevel)}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Risk {item.riskScore}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-900/40 border-t border-slate-500/10 text-center">
        <p className="text-[10px] text-slate-500 font-medium italic">
          {language === "ja" ? "※1時間おきに更新されます" : "* Updated every hour"}
        </p>
      </div>
    </Card>
  );
}
