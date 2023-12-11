import { useEffect, useState } from "react";
import ShoppingCartItem from "../Components/molecules/ShoppingCartItem";
import Button from "../Components/atoms/Button";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");

    if (storedCart !== null) {
      const items = JSON.parse(storedCart);
      setCartItems(items);
      calculateTotalPrice();
    }
  }, []);

  const calculateTotalPrice = () => {
    let total = 0;
    console.log(cartItems);

    cartItems.map((cartItem) => {
      total += cartItem.price * cartItem.quantity;
    });
    setTotalPrice(total.toFixed(2));
  };

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
            key={index}
            productId={item.id}
            size={item.size}
            color={item.color}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      <div className="flex items-end flex-col gap-8">
        <div className="w-72 items-end mt-8 ">
          <p className="border-t-2 border-gray-400 text-right pr-4 pt-2 font-bold text-xl">
            Ukupno : {totalPrice} €
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
