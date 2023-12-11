import React, { useEffect, useState } from "react";
import QuantityCalculator from "../atoms/QuantityCalculator";
import { getProduct } from "../../api/products";
import { Product } from "../../common/types";
import NoImage from "../../assets/images/no-image.jpg";
import { Trash } from "@phosphor-icons/react";
import { ThreeDots } from "react-loader-spinner";
import { notifySuccess } from "../atoms/Toast";

const ShoppingCartItem = ({
  productId,
  size,
  color,
  cartItems,
  setCartItems,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    console.log(productId);

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getProduct(productId);
      setProduct(data);
    } catch (error) {
      console.error(
        "Error occured while fetching shopping cart product data:",
        error
      );
    }
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    event.currentTarget.onerror = null; // prevents looping
    event.currentTarget.src = NoImage;
  };

  const handleRemove = () => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) =>
          item.id !== productId || item.size !== size || item.color !== color
      );

      sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));

      notifySuccess("Uklonjeno iz košarice!");
      return updatedCartItems;
    });
  };

  useEffect(() => {
    quantity == 0 && handleRemove();
  }, [quantity]);

  return (
    <>
      {product ? (
        <div className="flex items-center justify-between px-4">
          <Trash
            size={32}
            className="mr-4 cursor-pointer text-blue-dark"
            onClick={handleRemove}
          />
          <div className="bg-white h-48 w-48 mb-4">
            {product ? (
              <img
                src={
                  product.variants && product.variants[0].images
                    ? product.variants[0].images[0]
                    : NoImage
                }
                alt="product image"
                className="object-contain h-full w-full"
                onError={handleError}
              />
            ) : (
              <img
                src={NoImage}
                alt="No Image"
                className="object-contain h-full w-full"
              />
            )}
          </div>
          <p className="text-lg font-medium w-80">
            {product.manufacturer} {product.model}, {color}, {size}
          </p>
          <QuantityCalculator quantity={quantity} setQuantity={setQuantity} />
          <div className="flex flex-col items-end">
            <p className="w-full flex justify-end font-semibold text-xl">
              {(product?.price * quantity).toFixed(2)} €
            </p>
            <p>1 kom = {product?.price} €</p>
          </div>
        </div>
      ) : (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#5F83DF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: "center" }}
          visible={true}
        />
      )}
    </>
  );
};

export default ShoppingCartItem;
