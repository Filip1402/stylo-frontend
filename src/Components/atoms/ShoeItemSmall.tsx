import { Link } from "react-router-dom";
import Shoe from "../../assets/images/shoe.png";

const ShoeItemSmall = ({ shoe }) => {
  return (
    <div>
      <Link to="/">
        <img src={Shoe} alt="shoe-image" className="w-full" />
        <p className="text-center">
          {shoe.manufacturer} {shoe.type} {shoe.model}
        </p>
        <p className="text-xl font-bold text-center">{shoe.price} €</p>
      </Link>
    </div>
  );
};

export default ShoeItemSmall;
