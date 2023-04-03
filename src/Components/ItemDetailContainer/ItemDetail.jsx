import React from "react";
import styles from "./ItemDetail.module.css";
import ItemCount from "./ItemCount.jsx";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContainerImg}>
        <img src={productSelected.img} alt="" />
      </div>
      <div className={styles.ContainerDetail}>
        <div className={styles.ContainerDetailInfo}>
          <div className={styles.title}>
            <h1 >{productSelected.title}</h1>
          </div>
          <div className={styles.desc}>
            <h2>{productSelected.description}</h2>
          </div>
        </div>
          <div className={styles.price}>
            <h3>Precio: ${productSelected.price}</h3>
          </div>
        <div className={styles.ContainerDetailContador}>
          <ItemCount
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

