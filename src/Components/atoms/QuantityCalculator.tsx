import { useEffect } from "react";

const QuantityCalculator = ({ quantity, setQuantity }) => {
  const increment = () => {
    setQuantity((prev: number) => prev + 1);
  };

  const decrement = () => {
    quantity > 0 ? setQuantity((prev: number) => prev - 1) : null;
  };

  useEffect(() => {
    console.log("quantity change");
  }, [quantity]);

  return (
    <div className="grid grid-cols-3 w-fit">
      <div
        onClick={decrement}
        className="flex justify-center items-center  h-14 w-14 bg-gray-300 cursor-pointer font-bold text-2xl"
      >
        -
      </div>
      <div className="flex justify-center items-center h-14 w-14 border-2 border-blue-dark bg-white font-bold text-xl">
        {quantity}
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
