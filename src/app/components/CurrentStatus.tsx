import * as React from "react";
import {
  MapPin,
  Droplets,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  AlertCircle,
  Loader2,
  Check,
  ChevronsUpDown,
  Trophy
} from "lucide-react";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { DialogTitle } from "./ui/dialog";
import { cn } from "./ui/utils";
import { useLanguage } from "../context/LanguageContext";
import { RiskLevel } from "../types/weather";

interface CurrentStatusProps {
  location: string;
  humidity: number | null;
  temperature: number | null;
  riskLevel: string;
  selectedPoint: string;
  onPointChange: (code: string) => void;
  points: { code: string; name: string; kana: string }[];
  loading: boolean;
  rank?: number;
}

export function CurrentStatus({
  location,
  humidity,
  temperature,
  riskLevel,
  selectedPoint,
  onPointChange,
  points,
  loading,
  rank
}: CurrentStatusProps) {
  const { t, language } = useLanguage();
  const [open, setOpen] = React.useState(false);

  const getRiskText = () => {
    switch (riskLevel) {
      case "HIGH":
        return t.currentStatus.high;
      case "MEDIUM":
        return t.currentStatus.medium;
      case "LOW":
        return t.currentStatus.low;
      default:
        return "--";
    }
  };

  const getRiskConfig = () => {
    switch (riskLevel) {
      case "HIGH":
        return {
          bg: "bg-red-500/20 border-red-500/50",
          text: "text-red-400",
          icon: AlertTriangle,
        };
      case "MEDIUM":
        return {
          bg: "bg-yellow-500/20 border-yellow-500/50",
          text: "text-yellow-400",
          icon: AlertCircle,
        };
      case "LOW":
        return {
          bg: "bg-green-500/20 border-green-500/50",
          text: "text-green-400",
          icon: CheckCircle,
        };
      default:
        return {
          bg: "bg-slate-700/50 border-slate-600",
          text: "text-slate-400",
          icon: Thermometer,
        };
    }
  };

  const riskConfig = getRiskConfig();
  const RiskIcon = riskConfig.icon;

  const selectedPointObj = points.find((p) => p.code === selectedPoint);
  const selectedPointName = selectedPointObj ? selectedPointObj.name : (loading ? "Loading..." : "東京");

  // 素材別のリスク判定用
  const materials = [
    { id: "cotton", name: t.userInput.materials.cotton.split("（")[0] },
    { id: "wool", name: t.userInput.materials.wool.split("（")[0] },
    { id: "polyester", name: t.userInput.materials.polyester.split("（")[0] },
    { id: "fleece", name: t.userInput.materials.fleece.split("（")[0] },
    { id: "silk", name: t.userInput.materials.silk.split("（")[0] },
    { id: "nylon", name: t.userInput.materials.nylon.split("（")[0] },
    { id: "leather", name: t.userInput.materials.leather.split("（")[0] },
  ];

  const getRiskLevelForMaterial = (mId: string) => {
    if (humidity === null || temperature === null) return "LOW";
    // 簡易的なロジック（実際には calculateStaticRisk と同期させるべきだが、フロントエンドでも計算可能）
    let score = 0;
    if (humidity <= 20) score = 80;
    else if (humidity <= 40) score = 50;
    else if (humidity <= 60) score = 20;
    else score = 5;

    if (["polyester", "nylon", "fleece"].includes(mId)) score += 20;
    else if (["wool"].includes(mId)) score += 10;
    else if (["cotton", "silk", "leather"].includes(mId)) score -= 10;

    if (score >= 70) return "HIGH";
    if (score >= 30) return "MEDIUM";
    return "LOW";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-white">{t.currentStatus.title}</h2>
          {rank && (
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-400 text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Trophy className="h-3 w-3" />
              全国 {rank} 位
            </span>
          )}
        </div>
        {loading && <Loader2 className="h-5 w-5 animate-spin text-blue-400" />}
      </div>

      <div className="grid gap-6">
        {/* Main Location & Weather Card with Glassmorphism */}
        <Card className="border-slate-500/30 bg-slate-800/40 backdrop-blur-md p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MapPin className="h-24 w-24 text-blue-400" />
          </div>

          <div className="space-y-5 relative z-10">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-200">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-lg font-medium">{t.currentStatus.location}</span>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => setOpen(true)}
                className="w-full justify-between items-center border-slate-600/50 bg-slate-700/30 backdrop-blur-sm text-white hover:bg-slate-600/50 hover:text-white px-4 py-3 h-12 shadow-inner"
              >
                <span className="font-bold text-lg">{selectedPointName}</span>
                <ChevronsUpDown className="ml-2 h-5 w-5 shrink-0 opacity-50" />
              </Button>

              <CommandDialog open={open} onOpenChange={setOpen}>
                {/* ... existing Command implementation ... */}
                <DialogTitle className="sr-only">Search Station</DialogTitle>
                <Command className="bg-slate-900/90 backdrop-blur-xl text-slate-100 border border-slate-700">
                  <CommandInput
                    placeholder={t.currentStatus.location === "観測地点" ? "地点を検索..." : "Search point..."}
                    className="text-slate-100 placeholder:text-slate-500 border-none focus:ring-0 h-14 text-base"
                  />
                  <CommandList className="max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                    <CommandEmpty>{language === "ja" ? "見つかりませんでした" : "No point found."}</CommandEmpty>
                    <CommandGroup heading={t.currentStatus.location}>
                      {points.map((point) => (
                        <CommandItem
                          key={point.code}
                          value={`${point.name}${point.kana}${point.code}`}
                          onSelect={() => {
                            onPointChange(point.code);
                            setOpen(false);
                          }}
                          className="text-slate-200 cursor-pointer flex items-center gap-3 px-4 py-3 data-[selected='true']:bg-blue-600 data-[selected='true']:text-white transition-colors border-b border-slate-800/50 last:border-none group rounded-md"
                        >
                          <div className="flex flex-col">
                            <span className="font-medium text-slate-100 group-data-[selected='true']:text-white">{point.name}</span>
                            <span className="text-[11px] leading-tight text-slate-400 group-data-[selected='true']:text-blue-200 uppercase tracking-wider">{point.kana}</span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CommandDialog>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl bg-slate-900/40 p-4 border border-slate-700/50">
                <Droplets className="h-8 w-8 text-blue-400" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{t.currentStatus.humidity}</p>
                  <p className="text-2xl font-black text-white">
                    {humidity !== null ? `${humidity}%` : "--%"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-900/40 p-4 border border-slate-700/50">
                <Thermometer className="h-8 w-8 text-orange-400" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{t.currentStatus.temperature}</p>
                  <p className="text-2xl font-black text-white">
                    {temperature !== null ? `${temperature}°C` : "--°C"}
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Level Gauge Section */}
            <div className={`mt-4 rounded-xl border-2 p-5 flex items-center justify-between transition-all duration-700 ${riskConfig.bg}`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-white/10 ${riskConfig.text}`}>
                  <RiskIcon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-200">{t.currentStatus.riskLevel}</p>
                  <p className={`text-3xl font-black ${riskConfig.text}`}>
                    {getRiskText()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Material Risk Map Card */}
        <Card className="border-slate-500/20 bg-slate-800/30 backdrop-blur-sm p-5 shadow-lg">
          <h3 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-purple-400" />
            {language === "ja" ? "素材別静電気リスク予測" : "Material Risk Map"}
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {materials.map((m) => {
              const level = getRiskLevelForMaterial(m.id);
              const color = level === "HIGH" ? "text-red-400 bg-red-400/10 border-red-400/20" :
                level === "MEDIUM" ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" :
                  "text-green-400 bg-green-400/10 border-green-400/20";
              return (
                <div key={m.id} className={`flex items-center justify-between px-3 py-2 rounded-lg border ${color}`}>
                  <span className="text-sm font-medium">{m.name}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-black/20 uppercase tracking-tight">
                    {level === "HIGH" ? t.currentStatus.high : level === "MEDIUM" ? t.currentStatus.medium : t.currentStatus.low}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};
