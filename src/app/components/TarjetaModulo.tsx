import styles from './TarjetaModulo.module.css';

interface TarjetaModuloProps {
  nombre: string;
  descripcion: string;
  categoria: string;
  variante?: 'primaria' | 'secundaria' | 'exito';
}

export default function TarjetaModulo({ 
  nombre, 
  descripcion, 
  categoria, 
  variante = 'primaria' 
}: TarjetaModuloProps) {
  const getVarianteClass = (variante: string) => {
    switch (variante) {
      case 'primaria':
        return styles.tarjetaPrimaria;
      case 'secundaria':
        return styles.tarjetaSecundaria;
      case 'exito':
        return styles.tarjetaExito;
      default:
        return styles.tarjetaPrimaria;
    }
  };

  return (
    <div className={`${styles.tarjeta} ${getVarianteClass(variante)}`}>
      <div className={styles.encabezado}>
        <h3 className={styles.titulo}>{nombre}</h3>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
      <span className={styles.categoria}>{categoria}</span>
    </div>
  );
}
