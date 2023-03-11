// Estilos css
// import "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.containerNavbar} >
      <Link to={"/"} style={{maxWidth:"300px"}}>
        <img
          src="https://res.cloudinary.com/drxzxkzpf/image/upload/v1677177832/logo_qjszmo.svg"
          alt="Logo"
          style={{ width: "70%", height: "100%" }}
        />
      </Link>
      <div style={{marginLeft:"-200px"}}>
      <ul className={styles.containerList}>
        <Link to="/" className={styles.containerList}>Todas</Link>
        <Link to={"/category/urbanas"} className={styles.containerList}>Urbanas</Link>
        <Link to={"/category/deportivas"} className={styles.containerList}>Deportivas</Link>
      </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
