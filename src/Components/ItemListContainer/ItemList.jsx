import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  const [Categorias, setCategorias] = useState([]);

  useEffect(() => {
    const Coleccion = collection(db, "categories");
    getDocs(Coleccion).then((respuesta) => {
      let ListadoCategorias = respuesta.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategorias(ListadoCategorias);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.barra}>
        <ul className={styles.containerList}>
          {Categorias.map((category) => {
            return (
              <div key={category.id}>
                <li>
                  <Link
                    to={category.path}
                    className={styles.containerList}
                  >
                    {category.title}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className={styles.prods}>
        {items.map((element) => {
          return <Item key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
