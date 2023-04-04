import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";


const Item = ({ element }) => {
  return (
    <div className={styles.hoverPC}>
      <Card style={{ width: "300px", maxHeight:"400px" }} sx={{ width: 350, margin: "6px" }}>
        <CardMedia
          image={element.img}
          component="img"
          alt="PC"
          height="200"
          object-fit="contain"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"1.1em", textAlign:"center", fontWeight:"bold"}}>
            {element.title}
          </Typography>
          <Typography variant="body3" color="text.primary" style={{textAlign:"center"}}>
            {element.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ width: "300px", textDecoration: "none" }}
            to={`/Item/${element.id}`}
          >
            <Button style={{ width: "100%" }} size="medium" variant="contained">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;
