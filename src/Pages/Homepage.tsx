import { useEffect, useState } from "react";
import MainProductListItem from "../Components/atoms/MainProductListItem";
import ShoeItemSmall from "../Components/atoms/ShoeItemSmall";
import { HomepageData, Product } from "../common/types";
import { getHomepage } from "../api/products";
import Partners from "../assets/images/partners.png";

const Homepage = () => {
  const [homepageContent, setHomepageContent] = useState<HomepageData | null>(
    null
  );

  const shopData = [
    { number: "45", text: "poslovnica" },
    { number: "250+", text: "modela tenisica" },
    { number: "30+", text: "partnera" },
    { number: "10k", text: "kupaca" },
    { number: "180+", text: "modela cipela" },
  ];

  const product: Product = {
    manufacturer: "NIKE",
    type: "tenisice",
    model: "Air Max 270",
    available: true,
    price: 150.99,
    images: [
      "https://www.buzzsneakers.hr/files/images/slike-proizvoda/media/AH8/AH8050-002/images/AH8050-002.jpg",
      "https://www.buzzsneakers.hr/files/images/slike-proizvoda/media/AH8/AH8050-002/images/AH8050-002.jpg",
    ],
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

  return (
    <div className="w-full">
      {homepageContent ? (
        <>
          <div className="lg:h-[calc(100vh-104px)]">
            <img
              className="w-full h-full object-cover"
              src={`https://${homepageContent.images[0]["hero-img"].url}`}
              alt="hero-img"
            />
          </div>
          <div className="flex flex-col md:mt-16 gap-16 py-4 lg:px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 ">
              <div className="flex-1">
                <img
                  className="w-full h-full object-cover"
                  src={`https://${homepageContent.images[1]["content-image"].url}`}
                  alt="hero-img"
                />
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4 p-4 max-w-7xl mx-auto ">
                  <ShoeItemSmall product={product} />
                  <ShoeItemSmall product={product} />
                  <ShoeItemSmall product={product} />
                  <ShoeItemSmall product={product} />
                </div>
              </div>
            </div>
            <h3 className="font-bold text-2xl">Naši partneri</h3>
          </div>
          <div className="w-full">
            <img
              className="w-full h-full object-cover mb-16"
              src={Partners}
              alt="partners-img"
            />
            <img
              className="w-full h-full object-cover"
              src={`https://${homepageContent.images[2]["bottom-banner-image"].url}`}
              alt="bottom-banner-img"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
            <MainProductListItem product={product} />
            <MainProductListItem product={product} />
            <MainProductListItem product={product} />
            <MainProductListItem product={product} />
          </div>
          <div className="flex flex-column md:flex-row w-full justify-between p-4 max-w-7xl mx-auto">
            {shopData.map((el, index) => (
              <div
                key={index}
                className="rounded-full flex 
                justify-center items-center bg-blue-middle text-center w-[200px] h-[200px] flex-col"
                style={{ borderRadius: "50%" }}
              >
                <p className="font-bold text-5xl text-white-light">
                  {el.number}
                </p>
                <p className="font-bold text-3xl text-white-light">{el.text}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Homepage;
