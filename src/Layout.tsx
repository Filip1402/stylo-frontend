import { Outlet } from "react-router";
import Footer from "./Components/atoms/Footer";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col bg-white-light ">
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
