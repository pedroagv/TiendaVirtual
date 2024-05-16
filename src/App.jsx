import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Nosotros from "./components/Nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import AddProduct from "./components/AddProduct";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/Header/NavBar";
import Landing from "./components/Landing/Landing";
import "./main.css";

function App() {


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
          
          {/* <Footer /> */}
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;