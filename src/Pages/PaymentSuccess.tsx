import { useEffect } from "react";
import { addOrder } from "../api/orders";

const PaymentSuccess = () => {
  //tu se salje request na robijev endpoint kad ga napravi da se unese order u bazu
  const cartItems = JSON.parse(sessionStorage.getItem("cart"));
  const addressData = JSON.parse(localStorage.getItem("addressData"));
  const token = localStorage.getItem("token");

  // Decode the token to get the payload
  const decodedToken = token ? JSON.parse(atob(token.split(".")[1])) : null;

  // Access the "sub" (subject) from the payload
  const userId = decodedToken ? decodedToken.sub : null;

  // Now, userId contains the user ID from the JWT
  console.log("Na di mi treba stranici je id", userId); //ovo je isto dobro
  console.log("Ja imam kosaricu", cartItems); //dobro je, jos addressData
  console.log("A adresu isto koja je", addressData);

  const handleSubmit = async () => {
    try {
      // Structure the data before calling addOrder
      const formattedData = {
        cartData: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
        addressData: {
          customerId: userId,
          shippingAddress: {
            streetName: addressData.streetName,
            streetNumber: addressData.streetNumber,
            postalCode: addressData.postalCode,
            city: addressData.city,
            country: addressData.country,
          },
        },
      };

      console.log("Podaci koji se šalju su", formattedData);

      // const response = await addOrder(formattedData);
      //console.log("Od robija je odgovor", response);
    } catch (error) {
      console.log("Nešto je pošlo po krivu", error);
    }
  };
  useEffect(() => {
    handleSubmit();
  });

  return (
    <div className="flex items-center justify-center h-screen bg-white-light">
      <h1 className="text-gray-dark font-bold text-6xl text-center">
        Uspješno ste izvršili plaćanje!
      </h1>
    </div>
  );
};

export default PaymentSuccess;
