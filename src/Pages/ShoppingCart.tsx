import { useEffect, useState } from "react";
import ShoppingCartItem from "../Components/molecules/ShoppingCartItem";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");

    if (storedCart !== null) {
      const items = JSON.parse(storedCart);
      setCartItems(items);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex flex-col w-full md:px-8 lg:px-0 py-8">
      {cartItems.map((item, index) => (
        <ShoppingCartItem
          key={index}
          productId={item.id}
          size={item.size}
          color={item.color}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
