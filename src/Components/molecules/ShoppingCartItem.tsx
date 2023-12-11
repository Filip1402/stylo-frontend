import React, { useEffect, useState } from "react";
import QuantityCalculator from "../atoms/QuantityCalculator";
import { getProduct } from "../../api/products";
import { Product } from "../../common/types";
import NoImage from "../../assets/images/no-image.jpg";
import { Trash } from "@phosphor-icons/react";
import { ThreeDots } from "react-loader-spinner";

const ShoppingCartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getProduct("34b6a527-ac9f-4e59-aaa9-338397aa353a");
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
    console.log("todo remove");
  };

  return (
    <>
      {product ? (
        <div className="flex items-center justify-between">
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
          <p className="text-lg font-medium">NIKE Air Max 270, crne, 42</p>
          <QuantityCalculator quantity={quantity} setQuantity={setQuantity} />
          <div className="flex flex-col items-end">
            <p className=" w-full flex justify-end font-semibold text-xl">
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
