import { useEffect } from "react";

const QuantityCalculator = ({ setCartItems, product }) => {
  const increment = () => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (
          item.id == product.id &&
          item.size == product.size &&
          item.color == product.color
        ) {
          return { ...item, quantity: item.quantity + 1 }; // updatea samo zeljeni atribut u objektu
        }
        return item; // vraca sve ostale objekte u listi kao sto su bili prije
      });
    });
  };

  const decrement = () => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (
          item.id == product.id &&
          item.size == product.size &&
          item.color == product.color
        ) {
          return { ...item, quantity: item.quantity - 1 }; // updatea samo zeljeni atribut u objektu
        }
        return item; // vraca sve ostale objekte u listi kao sto su bili prije
      });
    });
  };

  return (
    <div className="grid grid-cols-3 w-fit">
      <div
        onClick={decrement}
        className="flex justify-center items-center  h-14 w-14 bg-gray-300 cursor-pointer font-bold text-2xl"
      >
        -
      </div>
      <div className="flex justify-center items-center h-14 w-14 border-2 border-blue-dark bg-white font-bold text-xl">
        {product.quantity}
      </div>
      <div
        onClick={increment}
        className="flex justify-center items-center h-14 w-14 bg-blue-dark cursor-pointer text-white font-bold text-2xl"
      >
        +
      </div>
    </div>
  );
};

export default QuantityCalculator;