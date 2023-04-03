import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h2 style={{ textAlign: "center" }}>Cantidad: {contador}</h2>
      <div style={{margin:"auto"}}>
        <Button
          style={{ margin: "0px 10px" }}
          variant="contained"
          onClick={sumar}
        >
          Sumar
        </Button>
        <Button
          style={{ margin: "0px 10px" }}
          variant="contained"
          onClick={restar}
        >
          Restar
        </Button>
        <Button
          style={{ margin: "0px 10px" }}
          variant="contained"
          onClick={() => onAdd(contador)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
