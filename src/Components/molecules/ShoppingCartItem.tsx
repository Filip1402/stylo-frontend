import React, { useEffect, useState } from "react";
import QuantityCalculator from "../atoms/QuantityCalculator";
import { getProduct } from "../../api/products";
import { Product } from "../../common/types";
import NoImage from "../../assets/images/no-image.jpg";
import { Trash } from "@phosphor-icons/react";
import { ThreeDots } from "react-loader-spinner";
import { notifySuccess } from "../atoms/Toast";

const ShoppingCartItem = ({ product, setCartItems, cartItems }) => {
  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    event.currentTarget.onerror = null; // prevents looping
    event.currentTarget.src = NoImage;
  };

  const handleRemove = () => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) =>
          item.id !== product.id ||
          item.size !== product.size ||
          item.color !== product.color
      );

      sessionStorage.setItem("cart", JSON.stringify(updatedCartItems));

      notifySuccess("Uklonjeno iz košarice!");
      return updatedCartItems;
    });
  };

  // useEffect(() => {
  //   product.quantity == 0 && handleRemove();
  // }, [product, product.quantity]);

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
            {
              <img
                src={product.image}
                alt="product image"
                className="object-contain h-full w-full"
                onError={handleError}
              />
            }
          </div>
          <p className="text-lg font-medium w-80">
            {product.manufacturer} {product.model}, {product.color},
            {product.size}
          </p>
          <QuantityCalculator
            setCartItems={setCartItems}
            product={product}
            cartItems={cartItems}
          />
          <div className="flex flex-col items-end">
            <p className="w-full flex justify-end font-semibold text-xl">
              {(product?.price * product.quantity).toFixed(2)} €
            </p>
            <p>1 kom = {product?.price} €</p>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default ShoppingCartItem;
