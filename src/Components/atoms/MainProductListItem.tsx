import { FC, useEffect } from "react";
import { Product } from "../../common/types";
import { Link } from "react-router-dom";
import NoImage from "../../assets/images/no-image.jpg";

const MainProductListItem: FC<{ product: Product }> = ({ product }) => {
  useEffect(() => {
    console.log("Ja dobijem proizvod", product);
  });

  const imageSource =
    product.images && product.images[0] && product.images[0][0];
  return (
    <Link to="/">
      <div className="bg-white w-full p-7">
        <div className="bg-white h-256 w-full mb-4">
          {imageSource ? (
            <img
              src={imageSource}
              alt="product image"
              className="object-contain h-full w-full"
            />
          ) : (
            <img
              src={NoImage}
              alt="No Image"
              className="object-contain h-full w-full"
            />
          )}
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
