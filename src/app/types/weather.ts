export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

export interface Station {
  code: string;
  name: string;
  kana: string;
}

export interface WeatherData {
  humidity: number | null;
  temperature: number | null;
  riskLevel: RiskLevel;
  timestamp: string;
}
