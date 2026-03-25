import { History as HistoryIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { useLanguage } from "../context/LanguageContext";

export interface ZapIncident {
  id: string;
  date: string;
  time: string;
  humidity: number;
  temperature: number;
  clothing: string;
}

interface HistoryProps {
  incidents: ZapIncident[];
}

export function History({ incidents }: HistoryProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <HistoryIcon className="h-5 w-5 text-slate-300" />
        <h2 className="text-xl font-semibold text-white">{t.history.title}</h2>
      </div>
      
      <Card className="border-slate-600 bg-slate-800 shadow-lg">
        {incidents.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-slate-300">{t.history.noIncidents}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-600 hover:bg-slate-700">
                  <TableHead className="text-slate-200">{t.history.dateTime}</TableHead>
                  <TableHead className="text-slate-200">{t.history.humidity}</TableHead>
                  <TableHead className="text-slate-200">{t.history.temperature}</TableHead>
                  <TableHead className="text-slate-200">{t.history.clothing}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incidents.map((incident) => (
                  <TableRow 
                    key={incident.id}
                    className="border-slate-600 hover:bg-slate-700"
                  >
                    <TableCell className="text-slate-100">
                      <div className="flex flex-col">
                        <span className="font-medium">{incident.date}</span>
                        <span className="text-sm text-slate-300">{incident.time}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-100">
                      <span className="font-mono">{incident.humidity}%</span>
                    </TableCell>
                    <TableCell className="text-slate-100">
                      <span className="font-mono">{incident.temperature}°C</span>
                    </TableCell>
                    <TableCell>
                      <span className="rounded-full bg-slate-600 px-3 py-1 text-sm text-slate-100">
                        {incident.clothing}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
}