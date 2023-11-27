import { Link } from "react-router-dom";
import { FC } from "react";
import { Product } from "../../common/types";

const ShoeItemSmall: FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <Link to="/">
        <img src={product.image} alt="product-image" className="w-full" />
        <p className="text-center">
          {product.manufacturer} {product.type} {product.model}
        </p>
        <p className="text-xl font-bold text-center">{product.price} €</p>
      </Link>
    </div>
  );
};

export default ShoeItemSmall;
