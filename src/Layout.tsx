import { Outlet } from "react-router";
import Header from "./Components/molecules/Header";
import Footer from "./Components/atoms/Footer";
import { useEffect, useState } from "react";
import { getLayout } from "./api/products";

const Layout = () => {
  const [layoutData, setLayoutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLayout();
        setLayoutData(data);
        console.log(layoutData);
      } catch (error) {
        console.error("Error occured while fetching layout data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white-light ">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
