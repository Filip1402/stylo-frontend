import { FC } from "react";
import { Product } from "../../common/types";
import { Link } from "react-router-dom";

const MainProductListItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <Link to="/">
      <div className="bg-white w-full p-7">
        <div className="bg-white h-256 w-full mb-4">
          <img
            src={product.images[0]}
            alt="product image"
            className="object-contain h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg text-grey-dark">{product.manufacturer}</p>
          <h3 className="text-xl text-grey-darker">{product.model}</h3>
          {product.available ? (
            <h4 className="text-green-custom text-xl">Dostupno</h4>
          ) : (
            <h4 className="text-red-500 text-xl">Nedostupno</h4>
          )}
          <h2 className="text-3xl font-bold text-grey-dark">
            {product.price} €
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default MainProductListItem;
