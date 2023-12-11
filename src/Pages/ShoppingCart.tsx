import { useEffect, useState } from "react";
import ShoppingCartItem from "../Components/molecules/ShoppingCartItem";
import Button from "../Components/atoms/Button";
import { getProduct } from "../api/products";
import NoImage from "../assets/images/no-image.jpg";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  // const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    fetchDataAndUpdateCart();
  }, []);

  const fetchData = async (id) => {
    try {
      const data = await getProduct(id);
      return data;
    } catch (error) {
      console.error("Error occured while fetching layout data:", error);
    }
  };

  const fetchDataAndUpdateCart = async () => {
    const storedCart = sessionStorage.getItem("cart");

    if (storedCart !== null) {
      const items = JSON.parse(storedCart);
      console.log("prcman");

      // Use Promise.all to wait for all asynchronous calls to complete
      const updatedItems = await Promise.all(
        items.map(async (item) => {
          console.log("gaser");

          const productData = await fetchData(item.id);
          console.log(productData);

          return {
            ...item,
            price: productData.price,
            manufacturer: productData.manufacturer,
            model: productData.model,
            image: productData.variants[0]?.images[0] || NoImage,
          };
        })
      );

      console.log(updatedItems);

      setCartItems(updatedItems);
      // calculateTotalPrice();
    }
  };

  // useEffect(() => {
  //   setCartItems((currItems) => {
  //     return currItems.map((item) => {
  //       console.log(item);
  //       const price = 20;
  //       const img =
  //         "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0608afa3-02cc-4ccd-ae5a-660ae345bac4/sb-force-58-skate-shoe-jQmnC7.png";
  //       return { ...item, price: price, img: img };
  //     });
  //   });
  // }, []);

  // const calculateTotalPrice = () => {
  //   let total = 0;
  //   console.log(cartItems);

  //   cartItems.map((cartItem) => {
  //     total += cartItem.price * cartItem.quantity;
  //   });
  //   setTotalPrice(total.toFixed(2));
  // };

  return (
    <div className="max-w-7xl mx-auto flex  flex-col w-full md:px-8 lg:px-0 py-8">
      <div className="justify-end flex">
        <div className="flex justify-around w-[48rem] mb-4">
          <p className="w-56">Proizvod</p>
          <p className="w-48 text-center">Količina</p>
          <p className="w-28 text-end">Cijena</p>
        </div>
      </div>
      <hr />
      <div>
        {cartItems.map((item, index) => (
          <ShoppingCartItem
            product={item}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        ))}
      </div>
      <div className="flex items-end flex-col gap-8">
        <div className="w-72 items-end mt-8 ">
          <p className="border-t-2 border-gray-400 text-right pr-4 pt-2 font-bold text-xl">
            {/* Ukupno : {totalPrice} € */}
          </p>
        </div>
        <div>
          <Button onClick={() => {}}>Nastavi</Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
