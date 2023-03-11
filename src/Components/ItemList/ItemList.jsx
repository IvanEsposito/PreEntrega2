import { border, flexbox } from "@mui/system";
import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div style={{
      backgroundColor:"white",
      display:"flex",
      width:"100%",
      minHeight:"80vh",
      justifyContent:"space-evenly",
      alignItems:"center",
      border:"1px solid black"
      }}>
      {items.map((element) => {
        return <Item key={element.id} element={element}/>
      })}
    </div>
  );
};

export default ItemList;
