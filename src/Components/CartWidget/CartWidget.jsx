import { textAlign } from "@mui/system";
import { BsFillCartCheckFill } from "react-icons/bs";
import {Link} from "react-router-dom"
const CartWidget = () => {
  return (
    <Link to={"/Cart"}>
    <div className="container-cart" style={{display:"flex", flexDirection:"row-reverse"}}>
      <BsFillCartCheckFill style={{
        fontSize:"2rem",
        color: "white"
      }}/>
      <div className="bubble-counter">
        <span style={{fontSize:"2rem", color: "white"}}>0</span>
      </div>
    </div>
    </Link>
  );
};

export default CartWidget;
