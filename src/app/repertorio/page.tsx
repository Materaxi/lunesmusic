import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { createSlug } from "@/lib/utils";

interface Song {
  name: string;
  artist: string;
  chord: string;
  link: string;
  lyrics: string;
}

export default async function RepertorioPage() {
  let songs: Song[] = [];
  try {
    const filePath = path.join(process.cwd(), "src/data", "repertoire.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    songs = JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading or parsing repertoire.json:", error);
  }

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-50">
        Nuestro Repertorio
      </h1>
      {songs.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <Table className="min-w-full bg-white dark:bg-gray-800">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-gray-700">
                <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Nombre
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Autor
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Acorde
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Link
                </TableHead>
                <TableHead className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Letra
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {songs.map((song) => (
                <TableRow
                  key={song.name}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <TableCell className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                    {song.name}
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {song.artist}
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {song.chord}
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    <a
                      href={song.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver
                    </a>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    <Link href={`/repertorio/${createSlug(song.name)}`}>
                      Ver Letra
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No hay canciones en el repertorio en este momento.
        </p>
      )}
    </main>
  );
}
