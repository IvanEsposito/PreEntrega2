import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarCarrito = (producto) => {
    let existe = estaEnCarrito(producto.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity:producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };
  
  const estaEnCarrito = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };
  
  const vaciarCarrito = () => {
    setCart([]);
  };
  
  const totalElementos = () => {
    return cart.reduce ((acc, elemento)=>{
      return acc + elemento.quantity
    }, 0)
  };
  
  const totalPrecio = () => {
    let precio = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity * elemento.price;
    }, 0);

    return precio;
  };
  
  const eliminarProductosId = (id) => {
    const newCart = cart.filter((elemento) => elemento.id !== id);
    setCart(newCart);
  };

  const getQuantityById = (id) => {
    const carrito = cart.find((elemento) => elemento.id === id);
    return carrito?.quantity
  };

  let data = {
    cart,
    agregarCarrito,
    vaciarCarrito,
    totalElementos,
    totalPrecio,
    eliminarProductosId,
    getQuantityById,
  };
  return (
    
    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
