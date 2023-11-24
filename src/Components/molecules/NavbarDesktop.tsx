import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import Logo from "../../assets/images/stylo_logo.svg";

const NavbarDesktop = () => {
  return (
    <div className="bg-gray-200 p-6 flex items-center justify-between">
      <img src={Logo} alt="" />
      <ul className="flex gap-6">
        <Link
          to="/muskarci"
          className="uppercase font-bold text-grey-dark text-lg"
        >
          Muškarci
        </Link>
        <Link to="/zene" className="uppercase font-bold text-grey-dark text-lg">
          Žene
        </Link>
        <Link
          to="/djeca"
          className="uppercase font-bold text-grey-dark text-lg"
        >
          Djeca
        </Link>
      </ul>
      <Link
        to="/kosarica"
        className="text-grey-dark text-lg font-semibold uppercase"
      >
        {" "}
        <ShoppingCart size={32} color="#1443BB" />
      </Link>
    </div>
  );
};

export default NavbarDesktop;
