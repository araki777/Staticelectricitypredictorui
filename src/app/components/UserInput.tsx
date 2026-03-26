import { 
  Zap, 
  Shirt, 
  PlusCircle, 
  Layers, 
  Sparkles 
} from "lucide-react";
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
           <h2 className="text-xl font-black text-white tracking-tight">{t.userInput.title}</h2>
           <div className="h-1 w-8 rounded-full bg-orange-500/50"></div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onAddClick}
          className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-full border border-indigo-500/20 px-4"
        >
          <PlusCircle className="mr-1.5 h-4 w-4" />
          {language === "ja" ? "服を追加" : "Add Clothing"}
        </Button>
      </div>
      
      <Card className="border-slate-500/30 bg-slate-800/40 p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 bg-orange-500/10 blur-3xl rounded-full group-hover:opacity-100 opacity-50 transition-opacity"></div>
        
        <div className="space-y-6 relative z-10">
          <Tabs defaultValue="preset" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-900/60 p-1 mb-6 border border-slate-700/50 rounded-xl">
              <TabsTrigger value="preset" className="rounded-lg data-[state=active]:bg-slate-700 data-[state=active]:text-white data-[state=active]:shadow-lg py-2.5 transition-all">
                <Layers className="mr-2 h-4 w-4" />
                <span className="font-bold tracking-tight">{language === "ja" ? "標準素材" : "Presets"}</span>
              </TabsTrigger>
              <TabsTrigger value="custom" className="rounded-lg data-[state=active]:bg-slate-700 data-[state=active]:text-white data-[state=active]:shadow-lg py-2.5 transition-all">
                <Shirt className="mr-2 h-4 w-4" />
                <span className="font-bold tracking-tight">{language === "ja" ? "クローゼット" : "Closet"}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="preset" className="space-y-4 mt-0 animate-in slide-in-from-left-2 duration-300">
              <div className="space-y-2">
                <Label htmlFor="clothing" className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-1">
                  {t.userInput.clothingLabel}
                </Label>
                <Select value={clothingMaterial} onValueChange={onClothingChange}>
                  <SelectTrigger id="clothing" className="h-12 border-slate-600/50 bg-slate-900/40 text-white shadow-inner hover:bg-slate-700/50 hover:border-slate-500 transition-all rounded-xl">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-orange-400/70" />
                      <SelectValue placeholder={t.userInput.clothingPlaceholder} />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="border-slate-700 bg-slate-900/95 backdrop-blur-xl text-white rounded-xl">
                    <SelectItem value="cotton" className="py-3 focus:bg-orange-500/20">{t.userInput.materials.cotton}</SelectItem>
                    <SelectItem value="wool" className="py-3 focus:bg-orange-500/20">{t.userInput.materials.wool}</SelectItem>
                    <SelectItem value="polyester" className="py-3 focus:bg-orange-500/20">{t.userInput.materials.polyester}</SelectItem>
                    <SelectItem value="fleece" className="py-3 focus:bg-orange-500/20">{t.userInput.materials.fleece}</SelectItem>
                    <SelectItem value="silk" className="py-3 focus:bg-orange-500/20">{t.userInput.materials.silk}</SelectItem>
                    <SelectItem value="nylon" className="py-3 focus:bg-orange-500/20">{t.userInput.materials.nylon}</SelectItem>
                    <SelectItem value="leather" className="py-3 focus:bg-orange-500/20">{t.userInput.materials.leather}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="space-y-4 mt-0 animate-in slide-in-from-right-2 duration-300">
              <div className="space-y-2">
                <Label htmlFor="custom-clothing" className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-1">
                  {language === "ja" ? "登録した服を選択" : "Select registered item"}
                </Label>
                {registeredClothes.length > 0 ? (
                  <Select value={clothingMaterial} onValueChange={onClothingChange}>
                    <SelectTrigger id="custom-clothing" className="h-12 border-slate-600/50 bg-slate-900/40 text-white shadow-inner hover:bg-slate-700/50 transition-all rounded-xl">
                      <div className="flex items-center gap-3">
                        <Shirt className="h-4 w-4 text-indigo-400/70" />
                        <SelectValue placeholder={language === "ja" ? "服を選択してください" : "Select an item"} />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="border-slate-700 bg-slate-900/95 backdrop-blur-xl text-white rounded-xl">
                      {registeredClothes.map((item) => (
                        <SelectItem key={item.id} value={`custom-${item.id}`} className="py-3 focus:bg-indigo-500/20">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">👕</span>
                            <div className="flex flex-col">
                              <span className="font-bold">{item.name}</span>
                              <span className="text-[10px] text-slate-500 font-medium">
                                {item.materials.map(m => m.name).join(", ")}
                              </span>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-700/50 rounded-2xl bg-slate-900/30 transition-colors group-hover:border-indigo-500/30">
                    <p className="text-sm text-slate-500 mb-4 font-medium italic">{language === "ja" ? "登録された服はありません" : "No registered items yet."}</p>
                    <Button variant="outline" size="sm" onClick={onAddClick} className="border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 rounded-full px-6 shadow-sm">
                      {language === "ja" ? "最初の服を登録する" : "Add your first item"}
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Premium Zapped Button */}
          <div className="pt-2">
            <Button
              onClick={onZapped}
              size="lg"
              className="w-full relative h-16 group/btn overflow-hidden rounded-2xl bg-slate-900 border-none transition-all active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-90 transition-all group-hover/btn:opacity-100 group-hover/btn:scale-105"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(255,255,255,0.4),_transparent)] transition-opacity opacity-50 group-hover/btn:opacity-80"></div>
              
              <div className="relative flex items-center justify-center gap-3">
                <div className="relative">
                   <div className="absolute inset-0 bg-white/40 blur-lg rounded-full animate-ping opacity-20"></div>
                   <Zap className="h-7 w-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] animate-bounce" style={{animationDuration: '2s'}} />
                </div>
                <span className="text-xl font-black text-white tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] uppercase">
                  {language === "ja" ? "バチッときた！⚡" : "I got zapped!"}
                </span>
              </div>
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover/btn:left-[150%]"></div>
            </Button>
            <p className="text-center text-[10px] text-slate-500 mt-2 font-black uppercase tracking-widest opacity-50">Log static events instantly</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
