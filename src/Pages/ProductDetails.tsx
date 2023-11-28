import { useEffect } from "react";
import { useParams } from "react-router";
import { Product } from "../common/types";
import Carousel from "../Components/molecules/Carousel";

const ProductDetails = () => {
  const { id } = useParams();

  const product: Product = {
    manufacturer: "NIKE",
    type: "tenisice",
    model: "Air Max 270",
    available: true,
    price: 150.99,
    images: [
      "https://www.buzzsneakers.hr/files/images/slike-proizvoda/media/AH8/AH8050-002/images/AH8050-002.jpg",
      "https://www.buzzsneakers.hr/files/images/slike-proizvoda/media/AH6/AH6789-601/images/AH6789-601.jpg",
      "https://www.buzzsneakers.hr/files/thumbs/files/images/slike-proizvoda/media/943/943345-159/images/thumbs_800/943345-159_800_800px.jpg",
    ],
  };

  useEffect(() => console.log(id));

  return (
    <div className="max-w-7xl mx-auto flex flex-col w-full md:px-8 l:px-0">
      <div className="flex flex-row">
        <Carousel images={product.images} />
        <Carousel images={product.images} />
      </div>
    </div>
  );
};

export default ProductDetails;
