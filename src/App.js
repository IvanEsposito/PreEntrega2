import Navbar from "./Components/Navbar/Navbar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import CartContextProvider from "./Components/Context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/Item/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<h1>404</h1>} />

      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
