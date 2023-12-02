import { useEffect, useState } from "react";
import MainProductListItem from "../Components/atoms/MainProductListItem";
import ShoeItemSmall from "../Components/atoms/ShoeItemSmall";
import { Product } from "../common/types";
import { getHomepage } from "../api/products";

const Homepage = () => {
  const [homepageContent, setHomepageContent] = useState(null);
  const product: Product = {
    manufacturer: "NIKE",
    type: "tenisice",
    model: "Air Max 270",
    available: true,
    price: 150.99,
    image:
      "https://www.buzzsneakers.hr/files/images/slike-proizvoda/media/AH8/AH8050-002/images/AH8050-002.jpg",
  };

  const fetchData = async () => {
    try {
      const data = await getHomepage();
      setHomepageContent(data);
    } catch (error) {
      console.error("Error occured while fetching homepage data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //flex flex-col gap-8 px-3 for mobile

  return (
    <div className="grid grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
      <ShoeItemSmall product={product} />
      {homepageContent ? JSON.stringify(homepageContent) : "Loading..."}
    </div>
  );
};

export default Homepage;
