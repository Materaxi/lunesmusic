import { RehearsalCard } from "@/components/rehearsal-card";
import fs from "fs/promises";
import path from "path";

interface Rehearsal {
  date: string;
  dayOfWeek: string;
  time: string;
  songs: string[];
}

export default async function HomePage() {
  let rehearsals: Rehearsal[] = [];
  try {
    const filePath = path.join(process.cwd(), "src/data", "rehearsals.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    rehearsals = JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading or parsing rehearsals.json:", error);
    // Handle error, e.g., display a message to the user
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
      {/* Banner Section */}
      <header
        className="relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "url('/music-doodles-bg.png')" }}
      >
        <div
          className="absolute inset-0 bg-white/70 dark:bg-gray-950/70"
          aria-hidden="true"
        ></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-gray-50 drop-shadow-lg">
            Lunes Music
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium">
            Tu cronograma de ensayos semanales
          </p>
        </div>
      </header>

      {/* Rehearsal Schedule Section */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-50">
          Próximos Ensayos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {rehearsals.length > 0 ? (
            rehearsals.map((rehearsal, index) => (
              <RehearsalCard key={index} rehearsal={rehearsal} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
              No hay ensayos programados en este momento.
            </p>
          )}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Lunes Music. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
