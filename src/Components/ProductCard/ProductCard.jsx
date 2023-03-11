import "./ProductCard.css";

const ProductCard = ({ title, price = 0, isRed, login }) => {
  const saludar = () => {
    console.log("Hola");
  };
  const saludar2 = (nombre) => {
    console.log("Hola " + nombre);
  };
  return (
    <div>
      <h1 className={isRed ? "red" : "blue"}> {title} </h1>
      <h2> {price} </h2>
      <button onClick={saludar}>Saludar</button>
      <button onClick={ () => saludar2("Juan")}>Saludar</button>
                {/* funcion callback () => {codigo dentro del callback (parametro)} 
                (en el de arribano se ponen () por que estan en la misma linea) */}
      <button onClick={login}>Ingresar</button>
    </div>
  );
};

export default ProductCard;
