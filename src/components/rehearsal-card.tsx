import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface RehearsalCardProps {
  rehearsal: {
    date: string;
    dayOfWeek: string;
    time: string;
    songs: string[];
  };
}

export function RehearsalCard({ rehearsal }: RehearsalCardProps) {
  const formattedDate = new Date(rehearsal.date).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="bg-gray-100 dark:bg-gray-800 border-b">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-50">
          {rehearsal.dayOfWeek}, {formattedDate}
        </CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Hora: {rehearsal.time} hs
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
          Repertorio:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {rehearsal.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
