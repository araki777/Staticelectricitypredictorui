import axios from 'axios';

/**
 * 気象庁 AMeDAS 地点情報の型
 */
export interface AmedasPoint {
  type: string;
  elems: string;
  lat: number[]; // [度, 分]
  lon: number[]; // [度, 分]
  alt: number;   // 標高
  kjName: string; // 漢字名
  knName: string; // カナ名
  enName: string; // 英語名
}

/**
 * AMeDAS 地点リストの型
 */
export interface AmedasTable {
  [pointCode: string]: AmedasPoint;
}

/**
 * AMeDAS 観測データの項目型
 */
export interface AmedasObservationValue {
  temp?: [number, number];            // 気温 [値, 品質コード]
  precipitation1h?: [number, number];  // 1時間降水量
  precipitation10m?: [number, number]; // 10分間降水量
  windDirection?: [number, number];   // 風向
  wind?: [number, number];            // 風速
  humidity?: [number, number];        // 湿度
  sun1h?: [number, number];           // 1時間日照時間
  pressure?: [number, number];        // 気圧
  normalPressure?: [number, number];  // 海面気圧
}

/**
 * AMeDAS 観測データ（特定時刻）の型
 */
export interface AmedasData {
  [time: string]: AmedasObservationValue;
}

const BASE_URL = 'https://www.jma.go.jp/bosai';

/**
 * JMA (気象庁) AMeDAS API 連携クラス
 */
export class JmaApi {
  /**
   * AMeDAS の全地点情報を取得します。
   */
  static async getAmedasTable(): Promise<AmedasTable> {
    const url = `${BASE_URL}/amedas/const/amedastable.json`;
    try {
      console.log(`Fetching AMeDAS table from: ${url}`);
      const response = await axios.get<AmedasTable>(url);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch AMeDAS table: ${error.message}`);
      if (error.response) {
        console.error(`Status: ${error.response.status}`);
      }
      throw error;
    }
  }

  /**
   * 最新の AMeDAS 観測時刻を取得します。
   * 返り値の形式: YYYYMMDDHHmm00 (例: 20240325121000)
   */
  static async getLatestTime(): Promise<string> {
    const url = `${BASE_URL}/amedas/data/latest_time.txt`;
    const response = await axios.get<string>(url);
    // レスポンス例: "2024-03-25T12:10:00+09:00"
    const date = new Date(response.data);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const h = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${y}${m}${d}${h}${min}00`;
  }

  /**
   * 指定した時刻の全地点の AMeDAS データを取得します。
   * @param datetime 時刻 (YYYYMMDDHHmm00)
   */
  static async getMapData(datetime: string): Promise<Record<string, AmedasObservationValue>> {
    const url = `${BASE_URL}/amedas/data/map/${datetime}.json`;
    try {
      console.log(`Fetching AMeDAS map data from: ${url}`);
      const response = await axios.get<Record<string, AmedasObservationValue>>(url);
      return response.data;
    } catch (error: any) {
      console.error(`Failed to fetch AMeDAS map data: ${error.message}`);
      throw error;
    }
  }

  /**
   * 主要な観測地点（Type "A"）のみを取得します。
   */
  static async getMajorStations(): Promise<{ code: string; name: string; kana: string }[]> {
    try {
      const table = await this.getAmedasTable();
      return Object.entries(table)
        .filter(([, info]) => info.type === "A")
        .map(([code, info]) => ({
          code,
          name: info.kjName,
          kana: info.knName,
        }))
        .sort((a, b) => a.name.localeCompare(b.name, "ja-JP"));
    } catch (error) {
      console.error("Failed to fetch major stations:", error);
      throw error;
    }
  }

  /**
   * 指定した地点の最新の AMeDAS データを取得します。
   * @param pointCode 地点コード
   */
  static async getLatestPointData(pointCode: string): Promise<AmedasObservationValue | null> {
    try {
      const latestTime = await this.getLatestTime();
      const mapData = await this.getMapData(latestTime);
      return mapData[pointCode] || null;
    } catch (error) {
      console.error(`Failed to fetch latest AMeDAS data for ${pointCode}:`, error);
      throw error;
    }
  }
}
