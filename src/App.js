import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemCount from "./Components/ItemCount/ItemCount.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/Item/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
