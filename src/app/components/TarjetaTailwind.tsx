interface TarjetaTailwindProps {
  titulo: string;
  descripcion: string;
  imagen?: string;
  etiqueta: string;
}

export default function TarjetaTailwind({ 
  titulo, 
  descripcion, 
  imagen, 
  etiqueta 
}: TarjetaTailwindProps) {
  return (
    <div className="flex flex-col w-64 m-2 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
      {/* Imagen de la tarjeta */}
      {imagen && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imagen} 
            alt={titulo}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
              {etiqueta}
            </span>
          </div>
        </div>
      )}
      
      {/* Contenido de la tarjeta */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {titulo}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-3 line-clamp-3">
          {descripcion}
        </p>
        
        {/* Footer con etiqueta */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {etiqueta}
          </span>
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
            Ver más →
          </button>
        </div>
      </div>
    </div>
  );
}
