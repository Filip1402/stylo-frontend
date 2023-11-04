import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Homepage from "./Pages/Homepage";
import AccountVerification from "./Pages/AccountVerification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/activation/" element={<AccountVerification />} />
      </Routes>
    </>
  );
}

export default App;
