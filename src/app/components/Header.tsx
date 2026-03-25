import { useState } from "react";
import { Zap, Languages, User, UserPlus, Check, X as CloseIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  currentUser: string;
  availableUsers: string[];
  onUserChange: (name: string) => void;
  onAddUser: (name: string) => void;
}

export function Header({ currentUser, availableUsers, onUserChange, onAddUser }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  const handleConfirmAdd = () => {
    if (newUserName && !availableUsers.includes(newUserName)) {
      onAddUser(newUserName);
      onUserChange(newUserName);
      setNewUserName("");
      setIsAddingUser(false);
    }
  };

  return (
    <header className="border-b border-slate-600 bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 shadow-md">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-none mb-1">
                {t.header.title}
              </h1>
              <p className="text-xs text-slate-400">
                {t.header.subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {!isAddingUser ? (
              <div className="flex items-center gap-2 bg-slate-700/50 rounded-lg p-1 border border-slate-600">
                <User className="ml-2 h-4 w-4 text-slate-400" />
                <select 
                  value={currentUser}
                  onChange={(e) => onUserChange(e.target.value)}
                  className="bg-transparent text-sm text-white border-none focus:ring-0 cursor-pointer pr-8"
                >
                  {availableUsers.map(user => (
                    <option key={user} value={user} className="bg-slate-800 text-white">
                      {user}
                    </option>
                  ))}
                </select>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsAddingUser(true)}
                  className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-600"
                >
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-1 bg-slate-700/50 rounded-lg p-1 border border-indigo-500/50 animate-in fade-in zoom-in duration-200">
                <Input 
                  autoFocus
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleConfirmAdd()}
                  placeholder={language === "ja" ? "名前..." : "Name..."}
                  className="h-8 w-24 bg-transparent border-none text-sm text-white focus-visible:ring-0 px-2"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleConfirmAdd}
                  className="h-8 w-8 text-green-400 hover:text-green-300 hover:bg-green-500/10"
                >
                  <Check className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsAddingUser(false)}
                  className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-600"
                >
                  <CloseIcon className="h-4 w-4" />
                </Button>
              </div>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-slate-500 bg-slate-700 text-white hover:bg-slate-600 hover:text-white h-9"
            >
              <Languages className="mr-2 h-4 w-4" />
              {language === "en" ? "日本語" : "English"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}