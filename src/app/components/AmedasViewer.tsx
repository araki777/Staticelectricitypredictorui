import React, { useEffect, useState } from 'react';
import { JmaClient, AmedasObservation, AmedasPointInfo, AmedasTable } from '../api/jmaClient';

/**
 * AMeDAS データ表示用サンプルコンポーネント
 */
export const AmedasViewer: React.FC = () => {
  const [table, setTable] = useState<AmedasTable | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<string>('44132'); // デフォルト: 東京
  const [data, setData] = useState<AmedasObservation | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 地点情報の取得
  useEffect(() => {
    const fetchTable = async () => {
      try {
        const tableData = await JmaClient.getTable();
        setTable(tableData);
      } catch (err) {
        console.error('Failed to fetch AMeDAS table', err);
      }
    };
    fetchTable();
  }, []);

  // データの取得
  const fetchData = async (code: string) => {
    setLoading(true);
    setError(null);
    try {
      const pointData = await JmaClient.getLatestData(code);
      setData(pointData);
    } catch (err: any) {
      setError(err.message || 'データの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedPoint) {
      fetchData(selectedPoint);
    }
  }, [selectedPoint]);

  const pointInfo = table && selectedPoint ? table[selectedPoint] : null;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800">AMeDAS 実況データ</h2>
      
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-600">観測地点を選択:</label>
        <select 
          value={selectedPoint}
          onChange={(e) => setSelectedPoint(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="44132">東京</option>
          <option value="44101">府中</option>
          <option value="44136">八王子</option>
          <option value="68132">大阪</option>
          <option value="51106">名古屋</option>
          <option value="14163">札幌</option>
          <option value="82182">福岡</option>
        </select>
      </div>

      {loading && <p className="text-blue-500 animate-pulse">データを読み込み中...</p>}
      {error && <p className="text-red-500">エラー: {error}</p>}

      {data && !loading && (
        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold text-lg border-b pb-1">
            {pointInfo?.kjName || '不明'} の観測値
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-gray-500">気温:</span>
            <span className="font-mono text-blue-600">{data.temp?.[0]} ℃</span>
            
            <span className="text-gray-500">湿度:</span>
            <span className="font-mono text-blue-600">{data.humidity?.[0]} %</span>
            
            <span className="text-gray-500">1時間降水量:</span>
            <span className="font-mono text-blue-600">{data.precipitation1h?.[0]} mm</span>
            
            <span className="text-gray-500">風速:</span>
            <span className="font-mono text-blue-600">{data.wind?.[0]} m/s</span>
          </div>
          <p className="text-[10px] text-gray-400 mt-2">※データ提供元: 気象庁 (JMA)</p>
        </div>
      )}
      
      {!data && !loading && <p className="text-gray-400">地点を選択してください</p>}
    </div>
  );
};
