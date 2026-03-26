/**
 * 湿度と気温に基づいて静電気のリスクレベルを判定します。
 */
export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

/**
 * 静電気リスクを数値化（0-100）して取得します。
 * @param humidity 湿度 (%)
 * @param _temperature 気温 (℃)
 * @param material 素材名 (任意)
 */
export function calculateStaticRiskScore(humidity: number, _temperature: number, material?: string): number {
  let score = 0;

  // 湿度による基本リスク (0-100)
  if (humidity <= 20) score = 80;
  else if (humidity <= 40) score = 50;
  else if (humidity <= 60) score = 20;
  else score = 5;

  // 素材による加点 (簡易的な帯電列に基づく)
  if (material) {
    const m = material.toLowerCase();
    if (m.includes("polyester") || m.includes("poly") || m.includes("nylon") || m.includes("acrylic") || m.includes("ポリエステル") || m.includes("ナイロン") || m.includes("アクリル")) {
      score += 20; // 合成繊維はリスク増
    } else if (m.includes("wool") || m.includes("fleece") || m.includes("ウール") || m.includes("フリース")) {
      score += 10;
    } else if (m.includes("cotton") || m.includes("silk") || m.includes("綿") || m.includes("シルク")) {
      score -= 10; // 天然繊維はリスク減
    }
  }

  // スコアを 0-100 にクランプ
  return Math.max(0, Math.min(100, score));
}

/**
 * 静電気リスクを算出します。
 */
export function calculateStaticRisk(humidity: number, temperature: number, material?: string): RiskLevel {
  const score = calculateStaticRiskScore(humidity, temperature, material);
  
  if (score >= 70) return "HIGH";
  if (score >= 30) return "MEDIUM";
  return "LOW";
}
