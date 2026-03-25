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
  ChevronsUpDown 
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
  riskLevel: RiskLevel;
  selectedPoint: string;
  onPointChange: (code: string) => void;
  points: { code: string; name: string; kana: string }[];
  loading?: boolean;
}

export function CurrentStatus({ 
  location, 
  humidity, 
  temperature, 
  riskLevel,
  selectedPoint,
  onPointChange,
  points,
  loading = false
}: CurrentStatusProps) {
  const { t, language } = useLanguage();
  const [open, setOpen] = React.useState(false);

  const getRiskColor = () => {
    switch (riskLevel) {
      case "HIGH":
        return {
          bg: "bg-red-500/30 border-red-400",
          text: "text-red-300",
          icon: AlertTriangle,
        };
      case "MEDIUM":
        return {
          bg: "bg-yellow-500/30 border-yellow-400",
          text: "text-yellow-300",
          icon: AlertCircle,
        };
      case "LOW":
        return {
          bg: "bg-green-500/30 border-green-400",
          text: "text-green-300",
          icon: CheckCircle,
        };
    }
  };

  const riskConfig = getRiskColor();
  const RiskIcon = riskConfig.icon;

  const getRiskText = () => {
    switch (riskLevel) {
      case "HIGH":
        return t.currentStatus.high;
      case "MEDIUM":
        return t.currentStatus.medium;
      case "LOW":
        return t.currentStatus.low;
    }
  };

  const selectedPointObj = points.find((p) => p.code === selectedPoint);
  const selectedPointName = selectedPointObj ? selectedPointObj.name : (loading ? "Loading..." : "東京");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{t.currentStatus.title}</h2>
        {loading && <Loader2 className="h-5 w-5 animate-spin text-blue-400" />}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {/* Location & Weather Card */}
        <Card className="border-slate-600 bg-slate-800 p-6 shadow-lg">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-lg font-medium">{t.currentStatus.location}</span>
              </div>
              

              <Button
                variant="outline"
                onClick={() => setOpen(true)}
                className="w-full justify-between items-center border-slate-600 bg-slate-700 text-white hover:bg-slate-600 hover:text-white px-3 py-2 h-10 overflow-hidden"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="truncate">{selectedPointName}</span>
                </div>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>

              <CommandDialog open={open} onOpenChange={setOpen}>
                <DialogTitle className="sr-only">Search Station</DialogTitle>
                <Command className="bg-slate-900 text-slate-100">
                  <CommandInput 
                    placeholder={t.currentStatus.location === "観測地点" ? "地点を検索..." : "Search point..."} 
                    className="text-slate-100 placeholder:text-slate-500 border-none focus:ring-0 h-14 text-base"
                  />
                  <CommandList className="max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                    <CommandEmpty className="py-10 text-center text-sm text-slate-400">
                      {language === "ja" ? "見つかりませんでした" : "No point found."}
                    </CommandEmpty>
                    <CommandGroup heading={t.currentStatus.location} className="[&_[cmdk-group-heading]]:text-blue-400 [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:px-2">
                      {points.map((point) => (
                        <CommandItem
                          key={point.code}
                          value={`${point.name}${point.kana}${point.code}`}
                          onSelect={() => {
                            onPointChange(point.code);
                            setOpen(false);
                          }}
                          className="text-slate-200 cursor-pointer flex items-center gap-3 px-4 py-3 data-[selected='true']:bg-blue-600 data-[selected='true']:text-white transition-colors border-b border-slate-800/50 last:border-none group"
                        >
                          <Check
                            className={cn(
                              "h-5 w-5 shrink-0 group-data-[selected='true']:text-white",
                              selectedPoint === point.code ? "opacity-100 text-blue-400" : "opacity-0"
                            )}
                          />
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
              <div className="flex items-center gap-3 rounded-lg bg-slate-700 p-3 shadow">
                <Droplets className="h-8 w-8 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-300">{t.currentStatus.humidity}</p>
                  <p className="text-xl font-bold text-white">
                    {humidity !== null ? `${humidity}%` : "--%"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 rounded-lg bg-slate-700 p-3 shadow">
                <Thermometer className="h-8 w-8 text-orange-400" />
                <div>
                  <p className="text-sm text-slate-300">{t.currentStatus.temperature}</p>
                  <p className="text-xl font-bold text-white">
                    {temperature !== null ? `${temperature}°C` : "--°C"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Risk Level Card */}
        <Card className={`border-2 p-6 shadow-lg transition-colors duration-500 ${riskConfig.bg}`}>
          <div className="flex h-full flex-col items-center justify-center space-y-3">
            <RiskIcon className={`h-16 w-16 ${riskConfig.text}`} />
            <div className="text-center">
              <p className="text-sm font-medium text-slate-200">{t.currentStatus.riskLevel}</p>
              <p className={`text-4xl font-bold ${riskConfig.text}`}>
                {getRiskText()}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
