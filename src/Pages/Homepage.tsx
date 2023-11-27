import ShoeItemSmall from "../Components/atoms/ShoeItemSmall";

const Homepage = () => {
  const shoe = {
    manufacturer: "NIKE",
    type: "tenisice",
    model: "Air Max 270",
    price: "150.99",
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <ShoeItemSmall shoe={shoe} />
      <ShoeItemSmall shoe={shoe} />
      <ShoeItemSmall shoe={shoe} />
      <ShoeItemSmall shoe={shoe} />
    </div>
  );
};

export default Homepage;
