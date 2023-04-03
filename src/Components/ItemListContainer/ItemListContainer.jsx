import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import PuffLoader from "react-spinners/PuffLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";

const override = {
  display: "block",
  margin: "40vh auto",
  borderColor: "blue",
};

const ItemListContainer = ({}) => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "armadas");

    let consulta = undefined;
    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }
    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setItems(products);
    });
  }, [categoryName]);
  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <PuffLoader
          color={"#36d7b7"}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};
export default ItemListContainer;
