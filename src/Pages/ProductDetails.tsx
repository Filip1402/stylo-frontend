import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Color, Product } from "../common/types";
import Carousel from "../Components/molecules/Carousel";
import ColorItemSelector from "../Components/molecules/ColorItemSelector";
import ShoeSizeSelector from "../Components/molecules/ShoeSizeSelector";
import Button from "../Components/atoms/Button";
import { getProduct } from "../api/products";
import NoImage from "../assets/images/no-image.jpg";
import { colors } from "../common/constants";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color[]>([]);
  const [selectedSize, setSelectedSize] = useState<number[]>([]);
  const [productSizes, setProductSizes] = useState<number[]>([]);
  const [productColors, setProductColors] = useState<Color[]>([]);

  const fetchData = async () => {
    setProductColors([]);
    try {
      const data = await getProduct(id!);
      setProduct(data);
      // console.log(data);
      calculateColors(data.variants);

      setSelectedColor([]);
      setSelectedColor((prev) => [
        ...prev,
        { name: data.variants[0].color, hexValue: "#b799be" }, // TODO change later with dynamic colors
      ]);
    } catch (error) {
      console.error("Error occured while fetching layout data:", error);
    }
  };

  const findColor = (name: string) => {
    const color = colors.find((item) => {
      console.log(item);
      return item.name === name;
    });
    return color?.hexValue;
  };

  const calculateColors = (variants) => {
    variants.map(
      (variant: {
        sku: string;
        color: string;
        images: Array<string>;
        sizes: Array<number>;
      }) => {
        console.log(variant);
        setProductColors((prev) => [
          ...prev,
          {
            name: variant.color,
            hexValue: findColor(variant.color.toLowerCase()),
          }, // TODO change later with dynamic colors
        ]);
      }
    );
    // console.log(productColors);
  };

  const calculateSizesBySelectedVariant = (
    varColor,
    variants: {
      sku: string;
      color: string;
      images: Array<string>;
      sizes: Array<number>;
    }
  ) => {
    const selected = variants.find((item) => {
      console.log(varColor);

      return item.color === varColor[0].name;
    });
    console.log(`selected: ${JSON.stringify(selected)}`);
    setProductSizes([]);
    selected.sizes.map((el: { size: number; quantity: number }) => {
      console.log(el);
      if (el.quantity > 0) {
        setProductSizes((prev) => [...prev, el.size]);
      }
    });
  };

  useEffect(() => {
    fetchData();
    console.log(findColor("narančasta"));
  }, []);

  useEffect(() => {
    console.log(selectedColor);
    if (selectedColor.length > 0) {
      console.log("promijena boje");
      setSelectedSize([]);
      console.log(selectedSize);
      calculateSizesBySelectedVariant(selectedColor, product?.variants);
    }
  }, [selectedColor]);

  return (
    <div className="max-w-7xl mx-auto flex flex-col w-full md:px-8 lg:px-0 py-8">
      {product ? (
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1 md:max-w-[50%]">
            <Carousel
              images={
                product.variants[0].images
                  ? product.variants[0].images
                  : [NoImage]
              }
            />
          </div>
          <div className="flex-1 flex-col flex gap-4 justify-center px-4 md:gap-2">
            <h3 className="text-xl font-medium text-grey-dark">
              {product.manufacturer}
            </h3>
            <p className="text-sm font-medium text-grey-dark capitalize">
              {product.type}
            </p>
            <p className="font-semibold text-3xl">{product.model}</p>
            {
              <div>
                {productColors.map((el, index) => (
                  <span key={index}>
                    {`${el.name} ${
                      index === productColors.length - 1 ? "" : "/"
                    } `}
                  </span>
                ))}
              </div>
            }
            <p className="font-semibold text-4xl">{product.price} €</p>
            <ColorItemSelector
              colors={productColors}
              setSelectedColors={setSelectedColor}
              selectedColors={selectedColor}
              allowMoreSelections={false}
            />
            <ShoeSizeSelector
              setSelectedShoeSizes={setSelectedSize}
              sizes={productSizes}
              singleSelection={true}
              selectedSizes={selectedSize}
            />

            <p>{JSON.stringify(product.available)}</p>
            <div className="max-w-sm mt-4">
              <Button
                onClick={() => {
                  console.log("added to cart");
                  console.log(selectedColor[0].name);
                  console.log(selectedSize);
                }}
                disabled={!product.available}
              >
                Dodaj u košaricu
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
