import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Color, Product } from "../common/types";
import Carousel from "../Components/molecules/Carousel";
import ColorItemSelector from "../Components/molecules/ColorItemSelector";
import ShoeSizeSelector from "../Components/molecules/ShoeSizeSelector";
import Button from "../Components/atoms/Button";

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
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    colors: [
      { name: "bijela", hexValue: "#fafafa" },
      { name: "crvena", hexValue: "#e02f2f" },
      { name: "crna", hexValue: "#141414" },
      { name: "plava", hexValue: "#3152e4" },
    ],
  };

  const [selectedColor, setSelectedColor] = useState<Color[]>([]);
  const [selectedSize, setSelectedSize] = useState<number[]>([]);

  useEffect(() => console.log(id));

  return (
    <div className="max-w-7xl mx-auto flex flex-col w-full md:px-8 lg:px-0 py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 md:max-w-[50%]">
          <Carousel images={product.images} />
        </div>
        <div className="flex-1 flex-col flex gap-4 justify-center px-4 md:gap-2">
          <h3 className="text-xl font-medium text-grey-dark">
            {product.manufacturer}
          </h3>
          <p className="text-sm font-medium text-grey-dark capitalize">
            {product.type}
          </p>
          <p className="font-semibold text-3xl">{product.model}</p>
          <div>
            {product.colors.map((el, index) => (
              <span key={index}>
                {`${el.name} ${
                  index === product.colors.length - 1 ? "" : "/"
                } `}
              </span>
            ))}
          </div>
          <p className="font-semibold text-4xl">{product.price} €</p>
          <ColorItemSelector
            setSelectedColors={setSelectedColor}
            selectedColors={selectedColor}
            allowMoreSelections={false}
          />
          <ShoeSizeSelector setSelectedShoeSizes={setSelectedSize} />
          <div className="max-w-sm mt-4">
            <Button
              onClick={() => {
                console.log("added to cart");
              }}
            >
              Dodaj u košaricu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
