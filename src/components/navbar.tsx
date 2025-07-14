import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
        >
          Lunes Music
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/repertorio"
              className="hover:text-gray-300 transition-colors"
            >
              Repertorio
            </Link>
          </li>
          <li>
            <Link
              href="/galeria"
              className="hover:text-gray-300 transition-colors"
            >
              Galería
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
