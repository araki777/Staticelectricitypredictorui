/**
 * 湿度と気温に基づいて静電気のリスクレベルを判定します。
 */
export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

/**
 * 静電気リスクを算出します。
 * @param humidity 湿度 (%)
 * @param _temperature 気温 (℃)
 * @param material 素材名 (任意)
 */
export function calculateStaticRisk(humidity: number, _temperature: number, material?: string): RiskLevel {
  let baseRiskScore = 0;

  // 湿度による基本リスク (0-100)
  if (humidity <= 20) baseRiskScore = 80;
  else if (humidity <= 40) baseRiskScore = 50;
  else if (humidity <= 60) baseRiskScore = 20;
  else baseRiskScore = 5;

  // 素材による加点 (簡易的な帯電列に基づく)
  if (material) {
    const m = material.toLowerCase();
    if (m.includes("polyester") || m.includes("poly") || m.includes("nylon") || m.includes("acrylic") || m.includes("ポリエステル") || m.includes("ナイロン") || m.includes("アクリル")) {
      baseRiskScore += 20; // 合成繊維はリスク増
    } else if (m.includes("wool") || m.includes("fleece") || m.includes("ウール") || m.includes("フリース")) {
      baseRiskScore += 10;
    } else if (m.includes("cotton") || m.includes("silk") || m.includes("綿") || m.includes("シルク")) {
      baseRiskScore -= 10; // 天然繊維はリスク減
    }
  }

  if (baseRiskScore >= 70) return "HIGH";
  if (baseRiskScore >= 30) return "MEDIUM";
  return "LOW";
}
