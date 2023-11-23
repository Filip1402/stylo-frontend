import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className=" min-h-screen flex flex-col white-light">
      <Outlet />
    </main>
  );
};

export default Layout;
