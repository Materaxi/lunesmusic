export default function GaleriaPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-50">
        Galería de Fotos
      </h1>
      <div className="text-center text-gray-600 dark:text-gray-400">
        <p className="text-lg">
          Aquí podrás encontrar fotos y momentos especiales de nuestro
          ministerio.
        </p>
        <p className="mt-4">¡Pronto tendremos más contenido para compartir!</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Placeholder for images */}
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
            Imagen 1
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
            Imagen 2
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
            Imagen 3
          </div>
        </div>
      </div>
    </main>
  );
}
