import "./MainProductListItem.scss";
import { ShoeItemSmallProps } from "../../common/types";
import { FC } from "react";

const MainProductListItem: FC<ShoeItemSmallProps> = ({ product }) => {
  return (
    <div className="main-product-list-item-wrapper">
      <div className="main-product-list-image-wrapper">
        <img src={product.image} alt="" />
      </div>
      <div className="main-product-list-item-text-wrapper">
        <p className="main-product-list-item-manufacturer">
          {product.manufacturer}
        </p>
        <h3>{product.model}</h3>
        {product.available ? (
          <h4 style={{ color: "#0D873E" }}>Dostupno</h4>
        ) : (
          <h4 style={{ color: "red" }}>Nedostupno</h4>
        )}
        <h2>{product.price} €</h2>
      </div>
    </div>
  );
};

export default MainProductListItem;
