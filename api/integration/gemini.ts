import { GoogleGenerativeAI } from "@google/generative-ai";

// APIキーはプロセス環境変数から取得（ユーザーが後で.envに設定する想定）
const apiKey = process.env.GEMINI_API_KEY || "";

/**
 * Geminiクライアントを初期化して返す
 * APIキーがない場合はエラーを投げるのではなく、呼び出し側でハンドリングする
 */
export const getGeminiModel = () => {
  if (!apiKey) {
    return null;
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });
};

/**
 * 画像を解析してテキスト情報を抽出します。
 * @param base64Image 画像のBase64文字列
 * @param mimeType 画像のMIMEタイプ (image/jpeg, image/png等)
 * @param prompt AIへの指示
 */
export const analyzeImage = async (base64Image: string, mimeType: string, prompt: string) => {
  const model = getGeminiModel();
  if (!model) {
    throw new Error("Gemini model is not initialized. Check API key.");
  }

  const result = await model.generateContent([
    prompt,
    {
      inlineData: {
        data: base64Image,
        mimeType: mimeType,
      },
    },
  ]);

  const response = await result.response;
  return response.text();
};
