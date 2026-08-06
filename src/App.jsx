
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About />} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Cart" element={<Cart/>} />
           <Route path="/Blog" element={<Blog/>} />
        </Routes>
     
    </>
  );
}

export default App;
