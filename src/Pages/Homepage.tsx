import MainProductListItem from "../Components/MainProductListItem/MainProductListItem";
import ShoeItemSmall from "../Components/atoms/ShoeItemSmall";
import { Product } from "../common/types";

const Homepage = () => {
  const product: Product = {
    manufacturer: "NIKE",
    type: "tenisice",
    model: "Air Max 270",
    available: true,
    price: 150.99,
    image:
      "https://www.buzzsneakers.hr/files/images/slike-proizvoda/media/AH8/AH8050-002/images/AH8050-002.jpg",
  };

  //flex flex-col gap-8 px-3 for mobile

  return (
    <div className="grid grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
      {/* <ShoeItemSmall product={product} />
      <ShoeItemSmall product={product} />
      <ShoeItemSmall product={product} />
      <ShoeItemSmall product={product} /> */}

      <MainProductListItem product={product} />
      <MainProductListItem product={product} />
      <MainProductListItem product={product} />
      <MainProductListItem product={product} />
      <MainProductListItem product={product} />
      <MainProductListItem product={product} />
    </div>
  );
};

export default Homepage;
