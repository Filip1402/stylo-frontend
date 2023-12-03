import FootwareType from "../Components/atoms/FootwareType";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductCategories } from "../api/product_categories";

//const availableCategories: any = layoutHeader || [];

interface ProductCategory {
  name: string;
  url: string;
}

const ProductListCategories = () => {
  const [productCategories, setProductCategories] = useState<
    ProductCategory[] | undefined
  >();

  const fetchData = async () => {
    try {
      const data = await getProductCategories(id!);
      setProductCategories(data);
      console.log("Product categories je", productCategories);
    } catch (error) {
      console.error("Error occured while fetching layout data:", error);
    }
  };
  const { id } = useParams();

  const { type } = useParams();

  useEffect(() => {
    fetchData();
  }, [id, type]);

  return (
    <div className="flex flex-col gap-6 max-w-[100rem] mx-auto p-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2">
      {productCategories?.map((footware, index) => (
        <Link
          to={`/proizvodi/${type}/${footware.name.toLowerCase()}`}
          key={index}
        >
          <FootwareType footwareType={footware} />
        </Link>
      ))}
    </div>
  );
};

export default ProductListCategories;
