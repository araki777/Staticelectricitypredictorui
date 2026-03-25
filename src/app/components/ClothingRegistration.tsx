import * as React from "react";
import { Camera, Upload, Loader2, Check, X, Shirt, AlertCircle, Sparkles, Plus, Trash2 } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useLanguage } from "../context/LanguageContext";

interface Material {
  name: string;
  percent: number;
}

interface AnalysisResult {
  materials: Material[];
  category: string;
  advice: string;
}

export interface ClothingItem extends AnalysisResult {
  id: string;
  name: string;
  imageUrl?: string;
  createdAt: string;
}

interface ClothingRegistrationProps {
  onRegister: (item: ClothingItem) => void;
  onCancel: () => void;
}

export function ClothingRegistration({ onRegister, onCancel }: ClothingRegistrationProps) {
  const { t, language } = useLanguage();
  const [image, setImage] = React.useState<string | null>(null);
  const [mimeType, setMimeType] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<AnalysisResult | null>(null);
  const [customName, setCustomName] = React.useState("");
  const [isManual, setIsManual] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String.split(',')[1]);
        setMimeType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image || !mimeType) return;

    setLoading(true);
    try {
      const response = await fetch('/api/clothing/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, mimeType }),
      });

      if (!response.ok) throw new Error('Analysis failed');
      const data = await response.json();
      setResult(data);
      setCustomName(data.category || "");
      setIsManual(false); // AI成功時はマニュアルオフ
      toast.success(language === "ja" ? "解析が完了しました" : "Analysis complete");
    } catch (error) {
      console.error(error);
      toast.error(language === "ja" ? "AI解析に失敗しました。手動で入力してください。" : "AI analysis failed. Please enter manually.");
      setResult({
        materials: [{ name: "", percent: 100 }],
        category: "",
        advice: language === "ja" ? "AI解析に失敗したため、手動で入力された情報です。" : "Added manually after AI analysis failure."
      });
      setIsManual(true);
    } finally {
      setLoading(false);
    }
  };

  const handleManualEntry = () => {
    setResult({
      materials: [{ name: "", percent: 100 }],
      category: "",
      advice: ""
    });
    setCustomName("");
    setIsManual(true);
  };

  const handleAddMaterial = () => {
    if (!result) return;
    setResult({
      ...result,
      materials: [...result.materials, { name: "", percent: 0 }]
    });
  };

  const handleRemoveMaterial = (index: number) => {
    if (!result) return;
    const newMaterials = [...result.materials];
    newMaterials.splice(index, 1);
    setResult({ ...result, materials: newMaterials });
  };

  const handleMaterialChange = (index: number, field: keyof Material, value: string | number) => {
    if (!result) return;
    const newMaterials = [...result.materials];
    newMaterials[index] = {
      ...newMaterials[index],
      [field]: field === "percent" ? Number(value) : value
    };
    setResult({ ...result, materials: newMaterials });
  };

  const handleSave = () => {
    if (!result) return;

    // バリデーション
    if (!customName && !result.category) {
      toast.error(language === "ja" ? "名前を入力してください" : "Please enter a name");
      return;
    }

    const newItem: ClothingItem = {
      ...result,
      id: Date.now().toString(),
      name: customName || result.category,
      createdAt: new Date().toISOString(),
      imageUrl: image ? `data:${mimeType};base64,${image}` : undefined,
    };

    onRegister(newItem);
    toast.success(language === "ja" ? "服装を登録しました" : "Clothing registered");
  };

  return (
    <Card className="border-slate-600 bg-slate-800 p-6 shadow-2xl">
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-700 pb-4">
          <div className="flex items-center gap-2">
            <Shirt className="h-6 w-6 text-indigo-400" />
            <h2 className="text-xl font-bold text-white">
              {language === "ja" ? "今日の服装を登録" : "Register Clothing"}
            </h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onCancel} className="text-slate-400">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {!result ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-300">
              {language === "ja" 
                ? "服のタグ（素材表示）を撮影するか、画像をアップロードしてください。AIが素材を自動判定します。" 
                : "Take a photo of the clothing tag or upload an image. AI will analyze the materials."}
            </p>
            
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-600 rounded-xl p-8 bg-slate-900/50 hover:bg-slate-900 transition-colors">
              {image ? (
                <div className="relative w-full max-w-[200px] aspect-square rounded-lg overflow-hidden border border-slate-700">
                  <img src={`data:${mimeType};base64,${image}`} alt="Preview" className="w-full h-full object-cover" />
                  <Button 
                    variant="destructive" 
                    size="icon" 
                    className="absolute top-1 right-1 h-6 w-6"
                    onClick={() => setImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-slate-800 p-4">
                    <Camera className="h-10 w-10 text-slate-400" />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="secondary" 
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      {language === "ja" ? "ファイルを選択" : "Select File"}
                    </Button>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      ref={fileInputRef}
                      onChange={handleFileChange} 
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline"
                className="border-slate-600 text-slate-100"
                onClick={handleManualEntry}
              >
                {language === "ja" ? "手動で入力する" : "Enter Manually"}
              </Button>
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700"
                disabled={!image || loading}
                onClick={handleAnalyze}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {language === "ja" ? "解析中..." : "Analyzing..."}
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    {language === "ja" ? "AIで判定" : "Analyze"}
                  </>
                )}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {language === "ja" ? "服の名前 / カテゴリ" : "Name / Category"}
                </label>
                <Input 
                  value={customName} 
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder={language === "ja" ? "例: お気に入りのセーター" : "e.g. Favorite Sweater"}
                  className="mt-1 bg-slate-900 border-slate-700 text-white focus:ring-indigo-500"
                />
              </div>

              <div className="rounded-lg bg-slate-900/80 p-4 border border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    {language === "ja" ? "素材の構成" : "Materials"}
                  </label>
                  {(isManual || true) && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleAddMaterial}
                      className="h-6 text-[10px] text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
                    >
                      <Plus className="mr-1 h-3 w-3" />
                      {language === "ja" ? "素材を追加" : "Add"}
                    </Button>
                  )}
                </div>
                
                <div className="space-y-3">
                  {result.materials.map((m, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Input 
                        value={m.name} 
                        onChange={(e) => handleMaterialChange(i, "name", e.target.value)}
                        placeholder={language === "ja" ? "素材名" : "Material"}
                        className="flex-1 h-8 bg-slate-800 border-slate-700 text-xs text-white"
                      />
                      <div className="flex items-center gap-1 w-20">
                        <Input 
                          type="number"
                          value={m.percent} 
                          onChange={(e) => handleMaterialChange(i, "percent", e.target.value)}
                          className="h-8 bg-slate-800 border-slate-700 text-xs text-white p-1 text-center"
                        />
                        <span className="text-xs text-slate-500">%</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleRemoveMaterial(i)}
                        className="h-8 w-8 text-slate-500 hover:text-red-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {result.materials.length === 0 && (
                    <p className="text-center text-xs text-slate-500 py-2">
                        {language === "ja" ? "素材が追加されていません" : "No materials added"}
                    </p>
                  )}
                </div>
              </div>

              {result.advice && (
                <div className="flex items-start gap-2 rounded-lg bg-indigo-500/10 p-3 border border-indigo-500/20 text-indigo-200 text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 text-indigo-400" />
                  <p>{result.advice}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 border-slate-600 text-slate-100" onClick={() => {
                setResult(null);
                setIsManual(false);
              }}>
                {language === "ja" ? "やり直す" : "Retake"}
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/20" onClick={handleSave}>
                <Check className="mr-2 h-4 w-4" />
                {language === "ja" ? "この服を登録" : "Save Clothing"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

