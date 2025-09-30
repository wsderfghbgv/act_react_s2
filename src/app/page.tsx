import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Demostración de Estilos en React
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorando diferentes métodos de estilizado: CSS Global, CSS Modules, Estilos en Línea y Tailwind CSS
          </p>
        </div>

        {/* Parte 1: CSS Global */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Parte 1: CSS Global
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TarjetaGlobal
              titulo="Tarjeta Azul"
              contenido="Esta tarjeta utiliza estilos CSS globales definidos en globals.css. Los estilos se aplican mediante clases CSS tradicionales."
              color="azul"
            />
            <TarjetaGlobal
              titulo="Tarjeta Verde"
              contenido="Los estilos globales permiten reutilización de código CSS en múltiples componentes de manera consistente."
              color="verde"
            />
            <TarjetaGlobal
              titulo="Tarjeta Roja"
              contenido="Incluye efectos hover y transiciones suaves para mejorar la experiencia del usuario."
              color="rojo"
            />
          </div>
        </section>

        {/* Parte 2: CSS Modules */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Parte 2: CSS Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TarjetaModulo
              nombre="Tarjeta Primaria"
              descripcion="Esta tarjeta utiliza CSS Modules para encapsular estilos. Los estilos son únicos para este componente y no afectan otros elementos."
              categoria="Primaria"
              variante="primaria"
            />
            <TarjetaModulo
              nombre="Tarjeta Secundaria"
              descripcion="CSS Modules proporcionan aislamiento de estilos y evitan conflictos de nombres de clases CSS."
              categoria="Secundaria"
              variante="secundaria"
            />
            <TarjetaModulo
              nombre="Tarjeta de Éxito"
              descripcion="Cada variante tiene su propio esquema de colores y efectos visuales únicos."
              categoria="Éxito"
              variante="exito"
            />
          </div>
        </section>

        {/* Parte 3: Estilos en Línea */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Parte 3: Estilos en Línea
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TarjetaDinamica
              titulo="Tarjeta Dinámica Activa"
              contenido="Esta tarjeta utiliza estilos en línea completamente dinámicos. Los colores, ancho y estado se controlan mediante props."
              colorFondo="#fef3c7"
              colorTexto="#92400e"
              ancho="300px"
              activo={true}
            />
            <TarjetaDinamica
              titulo="Tarjeta Dinámica Inactiva"
              contenido="Los estilos se aplican directamente en el objeto style del elemento, permitiendo máxima flexibilidad."
              colorFondo="#dbeafe"
              colorTexto="#1e40af"
              ancho="280px"
              activo={false}
            />
            <TarjetaDinamica
              titulo="Tarjeta Personalizada"
              contenido="Perfecta para casos donde necesitas estilos completamente personalizables basados en datos dinámicos."
              colorFondo="#f3e8ff"
              colorTexto="#7c3aed"
              ancho="320px"
              activo={true}
            />
          </div>
        </section>

        {/* Parte 4: Tailwind CSS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Parte 4: Tailwind CSS
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <TarjetaTailwind
              titulo="Tarjeta con Tailwind CSS"
              descripcion="Esta tarjeta utiliza únicamente clases de Tailwind CSS para el estilizado. Tailwind proporciona un sistema de diseño consistente y altamente personalizable."
              imagen="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
              etiqueta="Moderno"
            />
            <TarjetaTailwind
              titulo="Diseño Responsivo"
              descripcion="Tailwind CSS facilita la creación de diseños responsivos con clases utilitarias. Los efectos hover y transiciones están incluidos."
              imagen="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
              etiqueta="Responsivo"
            />
            <TarjetaTailwind
              titulo="Componente Reutilizable"
              descripcion="Las clases de Tailwind permiten crear componentes altamente reutilizables con estilos consistentes en toda la aplicación."
              imagen="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop"
              etiqueta="Reutilizable"
            />
          </div>
        </section>

        {/* Comparación y Conclusiones */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Comparación de Métodos
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">CSS Global</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Reutilizable</li>
                  <li>✓ Fácil de implementar</li>
                  <li>✗ Conflictos de nombres</li>
                  <li>✗ Menos encapsulado</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">CSS Modules</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Encapsulado</li>
                  <li>✓ Sin conflictos</li>
                  <li>✓ Mantenible</li>
                  <li>✗ Más configuración</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Estilos en Línea</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Máxima flexibilidad</li>
                  <li>✓ Dinámico</li>
                  <li>✗ No reutilizable</li>
                  <li>✗ Menos performante</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Sistema consistente</li>
                  <li>✓ Altamente personalizable</li>
                  <li>✓ Responsivo</li>
                  <li>✗ Curva de aprendizaje</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
