import { useEffect, useState } from "react";
import MainProductListItem from "../Components/atoms/MainProductListItem";
import ShoeItemSmall from "../Components/atoms/ShoeItemSmall";
import { HomepageData, Product } from "../common/types";
import { getHomepage } from "../api/products";

const Homepage = () => {
  const [homepageContent, setHomepageContent] = useState<HomepageData | null>(
    null
  );

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
    <div className="w-full">
      {homepageContent ? (
        <div className="lg:h-[calc(100vh-104px)]">
          <img
            className="w-full h-full object-cover"
            src={`https://${homepageContent.images[0]["hero-img"].url}`}
            alt="hero-img"
          />
        </div>
      ) : (
        "Loading..."
      )}
      <div className="grid grid-cols-4 gap-4 p-4 max-w-7xl mx-auto ">
        bok
        <ShoeItemSmall product={product} />
      </div>
    </div>
  );
};

export default Homepage;
