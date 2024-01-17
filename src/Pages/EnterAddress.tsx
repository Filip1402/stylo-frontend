import Input from "../Components/atoms/Input";
import Button from "../Components/atoms/Button";
import { useEffect, useState } from "react";
import { redirectToStripe } from "../api/payment";
import { useLocation, useNavigate } from "react-router";

const EnterAddress = () => {
  const [stripeUrl, setStripeUrl] = useState([]);

  const location = useLocation();
  const { cartItems } = location.state;

  //tu se mora na backend ovom endpointu poslati sadrzaj kosarice

  const navigate = useNavigate();

  const transformCartItems = (cartItems) => {
    return cartItems.map((item) => ({
      name: `${item.manufacturer} ${item.model}`,
      quantity: item.quantity,
      priceInCents: item.price * 100,
    }));
  };

  const fetchData = async () => {
    try {
      console.log("Dobiveno je", cartItems); //ovo je dobro

      const transformedCartItems = transformCartItems(cartItems);
      console.log("Transformirani podaci su", transformedCartItems);
      const response = await redirectToStripe(transformedCartItems);
      setStripeUrl(response.stripe_url);
      console.log("Url je", stripeUrl); //tu je dobar
    } catch (error) {
      console.error("Something is wrong:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center px-4 gap-4 lg:gap-2 relative py-4">
      <p className="text-xl ">Unesi adresu dostave:</p>

      <div className=" bg-white-light w-full px-6  rounded-lg mb-2  z-10  flex flex-col lg:py-8 max-w-[1200px]">
        <form
          id="loginForm"
          className="flex flex-col  lg:flex-row items-center"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // ref={form}
          //  onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-5 w-full ">
            <Input
              // value={formData.firstName}
              name="firstName"
              onChange={() => {}}
              type="text"
              placeholder="Adresa *"
              // error={errors.firstName}
            />
          </div>
        </form>
      </div>
      <div className="w-full max-w-[400px] flex-end flex px-6">
        <Button
          form="loginForm"
          onClick={() => {
            console.log("Url je", stripeUrl);
            if (stripeUrl) {
              window.location.href = stripeUrl;
            }
          }}
          type="button"
        >
          Nastavi na plaćanje
        </Button>
      </div>
    </div>
  );
};

export default EnterAddress;
