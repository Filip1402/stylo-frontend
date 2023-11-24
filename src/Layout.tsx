import { Outlet } from "react-router";
import Header from "./Components/molecules/Header";
import Footer from "./Components/atoms/Footer";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col bg-white-light ">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
