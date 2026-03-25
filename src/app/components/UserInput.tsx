import { Zap, Shirt, PlusCircle, History as HistoryIcon, Layers } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useLanguage } from "../context/LanguageContext";
import { ClothingItem } from "./ClothingRegistration";

interface UserInputProps {
  clothingMaterial: string;
  onClothingChange: (value: string) => void;
  onZapped: () => void;
  registeredClothes: ClothingItem[];
  onAddClick: () => void;
}


export function UserInput({ 
  clothingMaterial, 
  onClothingChange, 
  onZapped,
  registeredClothes,
  onAddClick
}: UserInputProps) {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{t.userInput.title}</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onAddClick}
          className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
        >
          <PlusCircle className="mr-1 h-4 w-4" />
          {language === "ja" ? "服を追加" : "Add Clothing"}
        </Button>
      </div>
      
      <Card className="border-slate-600 bg-slate-800 p-6 shadow-lg">
        <div className="space-y-6">
          <Tabs defaultValue="preset" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-900/50 p-1 mb-4">
              <TabsTrigger value="preset" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                <Layers className="mr-2 h-4 w-4" />
                {language === "ja" ? "標準素材" : "Presets"}
              </TabsTrigger>
              <TabsTrigger value="custom" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                <Shirt className="mr-2 h-4 w-4" />
                {language === "ja" ? "マイクローゼット" : "My Clothes"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="preset" className="space-y-3 mt-0">
              <Label htmlFor="clothing" className="flex items-center gap-2 text-slate-100 text-xs">
                {t.userInput.clothingLabel}
              </Label>
              <Select value={clothingMaterial} onValueChange={onClothingChange}>
                <SelectTrigger id="clothing" className="border-slate-500 bg-slate-700 text-white shadow hover:bg-slate-600">
                  <SelectValue placeholder={t.userInput.clothingPlaceholder} />
                </SelectTrigger>
                <SelectContent className="border-slate-500 bg-slate-700 text-white">
                  <SelectItem value="cotton">{t.userInput.materials.cotton}</SelectItem>
                  <SelectItem value="wool">{t.userInput.materials.wool}</SelectItem>
                  <SelectItem value="polyester">{t.userInput.materials.polyester}</SelectItem>
                  <SelectItem value="fleece">{t.userInput.materials.fleece}</SelectItem>
                  <SelectItem value="silk">{t.userInput.materials.silk}</SelectItem>
                  <SelectItem value="nylon">{t.userInput.materials.nylon}</SelectItem>
                  <SelectItem value="leather">{t.userInput.materials.leather}</SelectItem>
                </SelectContent>
              </Select>
            </TabsContent>

            <TabsContent value="custom" className="space-y-3 mt-0">
              <Label htmlFor="custom-clothing" className="flex items-center gap-2 text-slate-100 text-xs">
                {language === "ja" ? "登録した服を選択" : "Select registered item"}
              </Label>
              {registeredClothes.length > 0 ? (
                <Select value={clothingMaterial} onValueChange={onClothingChange}>
                  <SelectTrigger id="custom-clothing" className="border-slate-500 bg-slate-700 text-white shadow hover:bg-slate-600">
                    <SelectValue placeholder={language === "ja" ? "服を選択してください" : "Select an item"} />
                  </SelectTrigger>
                  <SelectContent className="border-slate-500 bg-slate-700 text-white">
                    {registeredClothes.map((item) => (
                      <SelectItem key={item.id} value={`custom-${item.id}`}>
                        <div className="flex items-center gap-2">
                          {item.name}
                          <span className="text-[10px] text-slate-400">
                            ({item.materials.map(m => m.name).join(", ")})
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 border border-dashed border-slate-700 rounded-lg bg-slate-900/30">
                  <p className="text-sm text-slate-500 mb-3">{language === "ja" ? "登録された服はありません" : "No registered items yet."}</p>
                  <Button variant="outline" size="sm" onClick={onAddClick} className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10">
                    {language === "ja" ? "最初の服を登録する" : "Add your first item"}
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Zapped Button */}
          <div className="pt-2">
            <Button
              onClick={onZapped}
              size="lg"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-lg font-bold text-white shadow-lg hover:from-yellow-500 hover:to-orange-600"
            >
              <Zap className="mr-2 h-6 w-6" />
              {language === "ja" ? "静電気が起きた！" : "I got zapped!"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}