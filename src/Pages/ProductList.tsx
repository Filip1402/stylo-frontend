import { useState, useEffect } from "react";
import Filter from "../Components/molecules/Filter";
import { getFilteredProducts } from "../api/products";
import { useParams } from "react-router";
import MainProductListItem from "../Components/atoms/MainProductListItem";
import { Product } from "../common/types";

const ProductList = () => {
  const { gender } = useParams();
  const { type } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >();

  const fetchData = async () => {
    try {
      const data = await getFilteredProducts(gender!, type!);
      setFilteredProducts(data);
      console.log(filteredProducts);
    } catch (error) {
      console.error("Error occured while fetching layout data:", error);
    }
  };

  return (
    <div>
      <Filter />

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
