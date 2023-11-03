import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { validateAccount } from "../api/users";

const AccountVerification = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activation_token = searchParams.get("activation_token");

  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await validateAccount(activation_token);
        setToken(response);
      } catch (error) {
        console.error("Something is wrong:", error);
      }
    };

    if (activation_token) {
      fetchData();
    }
  }, [activation_token]);

  return (
    <div>
      <h1>Your account is successfully validated</h1>
    </div>
  );
};

export default AccountVerification;
