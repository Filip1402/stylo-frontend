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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/lista-proizvoda" element={<ProductList />} />
          <Route path="/proizvodi" element={<ProductListCategories />} />
          <Route path="/proizvodi/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/activation/" element={<AccountVerification />} />
      </Routes>
    </>
  );
}

export default App;
