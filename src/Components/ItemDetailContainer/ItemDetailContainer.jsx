import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock.js";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element)=> element.id === Number(id))

  const onAdd = (cantidad) =>{
    console.log(`Se agrego al carrito ${cantidad} productos`)
  }

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="" />
      <h2>{productSelected.description}</h2>
      <h2>{productSelected.price}</h2>
      <ItemCount stock={productSelected.stock} onAdd={onAdd}/>

    </div>
  );
};

export default ItemDetailContainer;
