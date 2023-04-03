import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext.jsx";
import Swal from "sweetalert2";
import { useState } from "react";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";
import ItemDetail from "./ItemDetail.jsx";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarCarrito, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const itemsCollection = collection(db, "armadas");
    const ref = doc(itemsCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (contador) => {
    let producto = {
      ...productSelected,
      quantity: contador,
    };

    Swal.fire({
      position: "top-start",
      icon: "success",
      title: `Se agregaron con éxito ${contador} productos`,
      showConfirmButton: false,
      timer: 1500,
      width: "300px",
    });
    agregarCarrito(producto);
  };

  let quantity = getQuantityById(Number(id));

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />
  );
};

export default ItemDetailContainer;
