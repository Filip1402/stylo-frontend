import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Homepage from "./Pages/Homepage";
import AccountVerification from "./Pages/AccountVerification";
import Layout from "./Layout";
import ProductList from "./Pages/ProductList";
import ProductListCategories from "./Pages/ProductListCategories";
import ProductDetails from "./Pages/ProductDetails";
import ShoppingCart from "./Pages/ShoppingCart";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/proizvodi/:gender/:type" element={<ProductList />} />
          <Route path="/kategorije/:type" element={<ProductListCategories />} />
          <Route path="/kosarica" element={<ShoppingCart />} />
          <Route path="/proizvodi/:id" element={<ProductDetails />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/activation/" element={<AccountVerification />} />
      </Routes>
    </>
  );
}

export default App;
