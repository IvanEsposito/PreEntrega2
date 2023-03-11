import { useState } from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ItemCount = ({ stock, initial=1, onAdd }) => {
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
    <div>
      <h2 style={{marginBottom:"10px"}}>Cantidad: {contador}</h2>
      
      <Button style={{margin:"0px 5px"}} variant="contained" onClick={sumar}>
        Sumar
      </Button>
      <Button style={{margin:"0px 5px"}} variant="contained" onClick={restar}>
        Restar
      </Button>
      <Button style={{margin:"0px 5px"}} variant="contained" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
     
  );
};

export default ItemCount;
