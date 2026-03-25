import { MapPin, Droplets, Thermometer, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "../context/LanguageContext";

interface CurrentStatusProps {
  location: string;
  humidity: number;
  temperature: number;
  riskLevel: "LOW" | "MEDIUM" | "HIGH";
}

export function CurrentStatus({ 
  location, 
  humidity, 
  temperature, 
  riskLevel 
}: CurrentStatusProps) {
  const { t } = useLanguage();

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

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">{t.currentStatus.title}</h2>
      
      <div className="grid gap-4 md:grid-cols-2">
        {/* Location & Weather Card */}
        <Card className="border-slate-600 bg-slate-800 p-6 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-200">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-lg font-medium">{t.currentStatus.location}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-slate-700 p-3 shadow">
                <Droplets className="h-8 w-8 text-blue-400" />
                <div>
                  <p className="text-sm text-slate-300">{t.currentStatus.humidity}</p>
                  <p className="text-xl font-bold text-white">{humidity}%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 rounded-lg bg-slate-700 p-3 shadow">
                <Thermometer className="h-8 w-8 text-orange-400" />
                <div>
                  <p className="text-sm text-slate-300">{t.currentStatus.temperature}</p>
                  <p className="text-xl font-bold text-white">{temperature}°C</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Risk Level Card */}
        <Card className={`border-2 p-6 shadow-lg ${riskConfig.bg}`}>
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