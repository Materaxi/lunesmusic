import fs from "fs/promises";
import path from "path";
import { createSlug } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";

interface Song {
  name: string;
  artist: string;
  chord: string;
  link: string;
  lyrics: string;
}

// Function to generate static paths for all songs
export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), "data", "repertoire.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const songs: Song[] = JSON.parse(jsonData);
    return songs.map((song) => ({
      slug: createSlug(song.name),
    }));
  } catch (error) {
    console.error("Error generating static params for repertoire:", error);
    return [];
  }
}

export default async function SongDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let songs: Song[] = [];
  try {
    const filePath = path.join(process.cwd(), "data", "repertoire.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    songs = JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading or parsing repertoire.json:", error);
    notFound(); // If data cannot be read, treat as not found
  }

  const song = songs.find((s) => createSlug(s.name) === params.slug);

  if (!song) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/repertorio">
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Volver al Repertorio
          </Link>
        </Button>
      </div>
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-50">
        {song.name}
      </h1>
      <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-6">
        Autor: {song.artist} | Acorde: {song.chord}
      </p>
      {song.link && (
        <p className="text-center mb-8">
          <a
            href={song.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
          >
            Ver en YouTube
          </a>
        </p>
      )}

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-50">
          Letra:
        </h2>
        <pre className="whitespace-pre-wrap font-sans text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
          {song.lyrics}
        </pre>
      </div>
    </main>
  );
}
