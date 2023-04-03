import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, vaciarCarrito, totalPrecio, eliminarProductosId } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderID, setOrderID] = useState(null);

  const vaciarCart = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podrás revertir esta opción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, limpiar carrito!",
      cancelButtonText: "Nao nao",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Carrito limpio",
          icon: "success",
        });

        vaciarCarrito();
      }
    });
  };

  if (orderID) {
    return (
      <div className={styles.OrdenCarrito}>
        <div className={styles.text}>
          <h1>Gracias por tu compra</h1>
          <h3>Tu número de comprobante es: {orderID}</h3>
        </div>
        <div className={styles.Continuar}>
          <Link to="/">
            <Button variant="contained" size="medium">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      {cart.length ? (
        <div>
          {!showForm ? (
            <div className={styles.carrito}>
              <div className={styles.detalleCarrito}>
                {cart.map((e) => {
                  return (
                    
                    <div key={e.id}>
                    <div style={{ display: "flex" }}>
                      <div className={styles.itemCarrito} key={e.id}>
                        <div>
                          <img
                            src={e.img}
                            alt=""
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        <div style={{ alignSelf: "center", fontSize: "1.5em" }}>
                          <h3>{e.title}</h3>
                        </div>
                        <div
                          style={{
                            alignSelf: "center",
                            fontSize: "1.5em",
                            justifySelf: "end",
                          }}
                        >
                          <h3>{e.price}</h3>
                        </div>
                        <div style={{ alignSelf: "center", fontSize: "1.5em" }}>
                          <h3>Cantidad: {e.quantity}</h3>
                        </div>
                      </div>
                      <div className={styles.botonEliminar}>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => eliminarProductosId(e.id)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </div>
                          <div className={styles.linea}>

                          </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.botonesCarrito}>
                {cart.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "0px auto",
                    }}
                  >
                    <h1 style={{ margin: "0px" }}>
                      Total: ${totalPrecio()}
                    </h1>
                    <div style={{display:"flex"}}>
                      <Button
                        style={{margin:"3px", padding: "5px", fontSize:"0.8em"}}
                        onClick={() => setShowForm(true)}
                        variant="contained"
                      >
                        ir a Comprar
                      </Button>
                      <Button
                        style={{margin:"3px", padding: "5px", fontSize:"0.8em"}}
                        onClick={vaciarCart}
                        variant="contained"
                      >
                        Limpiar Carrito
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <FormCheckout
              cart={cart}
              totalPrecio={totalPrecio}
              setOrderID={setOrderID}
              vaciarCarrito={vaciarCarrito}
            />
          )}
        </div>
      ) : (
        <div className={styles.OrdenCarrito}>
          <h1 className={styles.textVacio}>El carrito está vacio!</h1>
          <div className={styles.botonVacio}>
            <Link to="/">
              <Button variant="contained" color="primary">
                Ir a comprar!
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;