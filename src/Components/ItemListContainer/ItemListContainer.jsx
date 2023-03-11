import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock.js";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = ({}) => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (element) => element.category === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("La solicitud no fue completada");
      });
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
