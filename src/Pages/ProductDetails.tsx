import { useEffect } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  useEffect(() => console.log(id));

  return (
    <div className="max-w-7xl mx-auto flex flex-col w-full md:px-8 l:px-0">
      <p>ProductDetails</p>
      <p>ProductDetails</p>
    </div>
  );
};

export default ProductDetails;
