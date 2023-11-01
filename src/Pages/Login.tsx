import React, { useState } from "react";
import Input from "../Components/atoms/Input";
import Button from "../Components/atoms/Button";
import { Link } from "react-router-dom";
import sneakersImg1 from "../assets/images/sneakers1.png";
import sneakersImg2 from "../assets/images/sneakers2.png";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [inputError, setInputError] = useState({
    email: false,
    password: false,
  });

  const handleUserDataChange = (name: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkData = (name: string, value: string) => {
    setInputError((prevData) => ({
      ...prevData,
      [name]: value === "",
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    handleUserDataChange(name, e.target.value);
  };

  return (
    <div className="flex justify-center flex-col items-center w-screen h-screen px-4 bg-gradient-to-br from-white to-blue-700 relative">
      <img
        src={sneakersImg1}
        alt="sneakers-image"
        className="absolute left-8 bottom-16 rotate-12 opacity-20 hidden lg:block"
      />
      <img
        src={sneakersImg2}
        alt="sneakers-image"
        className="absolute right-8 top-8 -rotate-12 opacity-20 hidden lg:block"
      />

      <div
        className="register-form-wrapper bg-white-light w-full px-6 py-9 rounded-lg mb-2 max-w-lg z-10  flex flex-col lg:py-16 lg:gap-8"
        style={{ boxShadow: "0 0 12px #1443BB" }}
      >
        <h2 className="text-2xl text-center">Postojeći korisnik</h2>
        <form className="flex flex-col gap-3.5 my-5">
          <Input
            value={userData.email}
            error={inputError.email}
            name="email"
            onChange={(e) => handleInputChange(e, "email")}
            type="email"
            placeholder="Email *"
          />
          <Input
            value={userData.password}
            error={inputError.password}
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e, "password")}
            placeholder="Lozinka *"
          />
        </form>
        <Button
          onClick={() => {
            checkData("email", userData.email);
            checkData("password", userData.password);
            console.log(userData);
          }}
          type="submit"
        >
          Prijavi se
        </Button>
      </div>
      <div className="text-white-light block gap-1 tracking-wider px-4 text-center lg:flex">
        <p>Još nemaš račun?</p>
        <p>
          <Link
            to={"/register"}
            className="text-underline "
            style={{ textDecoration: "underline" }}
          >
            Registriraj se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
