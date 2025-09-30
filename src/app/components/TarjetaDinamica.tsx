interface TarjetaDinamicaProps {
  titulo: string;
  contenido: string;
  colorFondo: string;
  colorTexto: string;
  ancho: string;
  activo?: boolean;
}

export default function TarjetaDinamica({ 
  titulo, 
  contenido, 
  colorFondo, 
  colorTexto, 
  ancho, 
  activo = false 
}: TarjetaDinamicaProps) {
  // Estilos base fijos
  const estilosBase = {
    padding: '1.5rem',
    margin: '1rem',
    borderRadius: '0.75rem',
    border: '2px solid',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  };

  // Estilos dinámicos basados en props
  const estilosDinamicos = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    borderColor: activo ? '#3b82f6' : '#e5e7eb',
    boxShadow: activo 
      ? '0 10px 25px rgba(59, 130, 246, 0.3)' 
      : '0 4px 6px rgba(0, 0, 0, 0.1)',
    transform: activo ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
  };

  // Estilos condicionales para el estado activo
  const estilosActivo = activo ? {
    '::before': {
      content: '""',
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
      zIndex: 1,
    }
  } : {};

  // Combinar todos los estilos
  const estilosFinales = {
    ...estilosBase,
    ...estilosDinamicos,
  };

  return (
    <div style={estilosFinales}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '0.75rem',
          textShadow: activo ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        }}>
          {titulo}
        </h3>
        <p style={{
          lineHeight: '1.6',
          fontSize: '1rem',
          opacity: activo ? 1 : 0.8,
        }}>
          {contenido}
        </p>
        {activo && (
          <div style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            width: '12px',
            height: '12px',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.3)',
          }} />
        )}
      </div>
    </div>
  );
}
