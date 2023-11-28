import Filter from "../Components/molecules/Filter";
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
      {/* <ColorItemSelector /> */}
      <Filter />
      <ShoeSizeSelector
        singleSelection={false}
        setSelectedShoeSizes={setSelectedShoeSizes}
        isGrid={true}
        sizes={[32, 34, 45]}
      />
      <button onClick={handleSendShoeNumbers}>send shoe numbers</button>
    </div>
  );
};

export default ProductList;
