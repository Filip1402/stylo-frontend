import React, { useState } from "react";
import QuantityCalculator from "../atoms/QuantityCalculator";

const ShoppingCartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-red-200">
      <QuantityCalculator quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
};

export default ShoppingCartItem;
