import ColorItemSelector from "../Components/molecules/ColorItemSelector";
import ShoeSizeSelector from "../Components/molecules/ShoeSizeSelector";
import { useState } from "react";

const ProductList = () => {
  const [selectedShoeSizes, setSelectedShoeSizes] = useState<number[]>([]);

  const handleSendShoeNumbers = () => {
    console.log("Selected Shoe Sizes:", selectedShoeSizes);
    //add API logic here
  };
  return (
    <div>
      <ColorItemSelector />
      <ShoeSizeSelector setSelectedShoeSizes={setSelectedShoeSizes} />
      <button onClick={handleSendShoeNumbers}>send shoe numbers</button>
    </div>
  );
};

export default ProductList;
