
import { BsFillCartCheckFill } from "react-icons/bs";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {

  const {totalElementos} = useContext(CartContext)

  const total = totalElementos();
  return (
    <Link to={"/Cart"}>
    <div className="container-cart" style={{display:"flex", flexDirection:"row-reverse"}}>
      <BsFillCartCheckFill style={{
        fontSize:"2rem",
        color: "white"
      }}/>
      <div className="bubble-counter">
        <span style={{fontSize:"2rem", color: "white"}}>{total}</span>
      </div>
    </div>
    </Link>
  );
};

export default CartWidget;
