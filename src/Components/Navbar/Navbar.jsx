import CartWidget from "../Cart/CartWidget";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
const Navbar = (children) => {

  const [categoryList, setCategoryList] = useState([])

  useEffect(()=>{
    const itemsCollection = collection(db, "Tags")
    getDocs(itemsCollection)
    .then((res)=>{
      let listadoCategories = res.docs.map(category=>{
        return {
          ...category.data(),
          id:category.id
        }
      })
      setCategoryList(listadoCategories)
    })
    },[])
  return (
    <div className={styles.containerNavbar} >
      <Link to={"/"} style={{maxWidth:"300px"}}>
        <img
          src="https://res.cloudinary.com/drxzxkzpf/image/upload/v1677177832/logo_qjszmo.svg"
          alt="Logo"
          style={{ width: "70%", height: "100%" }}
        />
      </Link>
      <div style={{marginLeft:"-200px"}} >
      <ul className={styles.containerList}>
      {
        categoryList.map((category)=>{
          return <Link key={category.id} to={category.Path} className={styles.containerList}>{category.Title}</Link>
        })
      }
      </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;


