import ShoeItemSmall from "../Components/atoms/ShoeItemSmall";
import { Product } from "../common/types";

const Homepage = () => {
  const product: Product = {
    manufacturer: "NIKE",
    type: "tenisice",
    model: "Air Max 270",
    price: 150.99,
    image:
      "https://www.buzzsneakers.hr/files/images/slike-proizvoda/media/AH8/AH8050-002/images/AH8050-002.jpg",
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <ShoeItemSmall product={product} />
      <ShoeItemSmall product={product} />
      <ShoeItemSmall product={product} />
      <ShoeItemSmall product={product} />
    </div>
  );
};

export default Homepage;
