import { Routes, Route } from "react-router-dom"
import Products from "./components/Products";
import Cart from "./components/Cart";
import EditProduct from "./components/EditProduct";

function App() {

  return (
    <>
      <div className="main">
        <div className="app">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/editproduct/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
