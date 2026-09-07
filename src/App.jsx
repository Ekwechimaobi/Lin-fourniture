
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import Sofa from "./pages/Sofa";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/shop/:id" element={<Sofa/>} />
        </Routes>
     
    </>
  );
}

export default App;
