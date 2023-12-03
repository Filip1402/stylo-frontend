import { useState, useEffect } from "react";
import Filter from "../Components/molecules/Filter";
import { getFilteredProducts } from "../api/products";
import { useParams } from "react-router";
import MainProductListItem from "../Components/atoms/MainProductListItem";
import { Color, Product } from "../common/types";

const ProductList = () => {
  const { gender } = useParams();
  const { type } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >();

  useEffect(() => {
    // This effect will be triggered whenever filteredProducts changes
    console.log("Filtered products changed:", filteredProducts);
  }, [filteredProducts]);

  const fetchData = async () => {
    try {
      const data = await getFilteredProducts(gender!, type!);
      setFilteredProducts(data);
      console.log(filteredProducts);
    } catch (error) {
      console.error("Error occured while fetching layout data:", error);
    }
  };

  const fetchDataWithFilter = async (
    selectedShoeSizes?: number[],
    selectedColors?: Color[]
  ) => {
    try {
      const data = await getFilteredProducts(
        gender!,
        type!,
        selectedShoeSizes.length > 0 ? selectedShoeSizes : undefined,
        selectedColors.length > 0 ? selectedColors[0].name : undefined
      );
      setFilteredProducts(data);
      console.log(filteredProducts);
      console.log(
        "Parametri su mi",
        gender,
        type,
        selectedShoeSizes,
        selectedColors
      );
    } catch (error) {
      console.error("Error occurred while fetching layout data:", error);
    }
  };

  const applyFilter = (
    selectedColors: Color[],
    selectedShoeSizes: number[]
  ) => {
    // Perform actions with the selected colors and shoe sizes
    console.log("Selected Colors:", selectedColors);
    console.log("Selected Shoe Sizes:", selectedShoeSizes);

    fetchDataWithFilter(selectedShoeSizes, selectedColors);

    // Refetch data or update the component state as needed
  };

  return (
    <div>
      <Filter onApplyFilter={applyFilter} />

      <div className="grid grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <MainProductListItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
