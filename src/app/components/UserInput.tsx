import { Zap, Shirt } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { useLanguage } from "../context/LanguageContext";

interface UserInputProps {
  clothingMaterial: string;
  onClothingChange: (value: string) => void;
  onZapped: () => void;
}

export function UserInput({ 
  clothingMaterial, 
  onClothingChange, 
  onZapped 
}: UserInputProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">{t.userInput.title}</h2>
      
      <Card className="border-slate-600 bg-slate-800 p-6 shadow-lg">
        <div className="space-y-6">
          {/* Clothing Material Selection */}
          <div className="space-y-3">
            <Label htmlFor="clothing" className="flex items-center gap-2 text-slate-100">
              <Shirt className="h-4 w-4" />
              {t.userInput.clothingLabel}
            </Label>
            <Select value={clothingMaterial} onValueChange={onClothingChange}>
              <SelectTrigger 
                id="clothing"
                className="border-slate-500 bg-slate-700 text-white shadow hover:bg-slate-600"
              >
                <SelectValue placeholder={t.userInput.clothingPlaceholder} />
              </SelectTrigger>
              <SelectContent className="border-slate-500 bg-slate-700 text-white">
                <SelectItem value="cotton" className="text-white hover:bg-slate-600 focus:bg-slate-600 focus:text-white">{t.userInput.materials.cotton}</SelectItem>
                <SelectItem value="wool" className="text-white hover:bg-slate-600 focus:bg-slate-600 focus:text-white">{t.userInput.materials.wool}</SelectItem>
                <SelectItem value="polyester" className="text-white hover:bg-slate-600 focus:bg-slate-600 focus:text-white">{t.userInput.materials.polyester}</SelectItem>
                <SelectItem value="fleece" className="text-white hover:bg-slate-600 focus:bg-slate-600 focus:text-white">{t.userInput.materials.fleece}</SelectItem>
                <SelectItem value="silk" className="text-white hover:bg-slate-600 focus:bg-slate-600 focus:text-white">{t.userInput.materials.silk}</SelectItem>
                <SelectItem value="nylon" className="text-white hover:bg-slate-600 focus:bg-slate-600 focus:text-white">{t.userInput.materials.nylon}</SelectItem>
                <SelectItem value="leather" className="text-white hover:bg-slate-600 focus:bg-slate-600 focus:text-white">{t.userInput.materials.leather}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Zapped Button */}
          <div className="pt-2">
            <Button
              onClick={onZapped}
              size="lg"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-lg font-bold text-white shadow-lg hover:from-yellow-500 hover:to-orange-600"
            >
              <Zap className="mr-2 h-6 w-6" />
              {t.userInput.zapButton}
            </Button>
            <p className="mt-2 text-center text-sm text-slate-300">
              {t.userInput.zapDescription}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}