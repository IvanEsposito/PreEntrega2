import styles from "./Item.module.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { padding } from "@mui/system";

const Item = ({ element }) => {
  return (
    <Card  style={{}} sx={{ width: 300, height: 360 }}>
      <CardMedia 
        sx={{ height: 200 }}
        image={element.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"black", width:"300px", height:"20px", marginBottom:"15px"}}>
          {element.title}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{width:"300px", height:"50px"}}>
          {element.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={{width:"300px", textDecoration:"none"}} to={`/Item/${element.id}`}>
          <Button style={{width:"100%"}} size="medium" variant="contained">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
