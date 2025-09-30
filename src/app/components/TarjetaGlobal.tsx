interface TarjetaGlobalProps {
  titulo: string;
  contenido: string;
  color?: string;
}

export default function TarjetaGlobal({ titulo, contenido, color = "default" }: TarjetaGlobalProps) {
  const getColorClass = (color: string) => {
    switch (color) {
      case "azul":
        return "border-blue-500 bg-blue-50";
      case "verde":
        return "border-green-500 bg-green-50";
      case "rojo":
        return "border-red-500 bg-red-50";
      case "amarillo":
        return "border-yellow-500 bg-yellow-50";
      default:
        return "";
    }
  };

  return (
    <div className={`tarjeta-global ${getColorClass(color)}`}>
      <h3 className="titulo-global">{titulo}</h3>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
}
