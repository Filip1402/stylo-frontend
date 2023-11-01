import { Link } from "react-router-dom";
import Button from "../Components/atoms/Button";
import Input from "../Components/atoms/Input";

const Register = () => {
  return (
    <div className="flex justify-center flex-col items-center w-screen h-screen px-4 bg-gradient-to-br from-white to-blue-700">
      <div
        className="register-form-wrapper bg-white-light w-full px-6 py-9 rounded-lg mb-2"
        style={{ boxShadow: "0 0 12px #1443BB" }}
      >
        <h2 className="text-2xl text-center">Izradi račun</h2>

        <form className="flex flex-col gap-3.5 my-5 ">
          <Input
            //value={"ddd"}
            error={false}
            name="name"
            onChange={() => {}}
            placeholder="Ime*"
          />
          <Input
            //value={"ddd"}
            error={false}
            name="surname"
            onChange={() => {}}
            placeholder="Prezime*"
          />{" "}
          <Input
            error={false}
            name="email"
            onChange={() => {}}
            placeholder="Email*"
          />{" "}
          <Input
            error={false}
            name="username"
            onChange={() => {}}
            placeholder="Korisničko ime*"
          />{" "}
          <Input
            error={false}
            name="password"
            onChange={() => {}}
            placeholder="Lozinka*"
            type="password"
          />
        </form>
        <Button onClick={() => {}} type="submit">
          Registriraj se
        </Button>
      </div>
      <p className="text-white-light flex gap-1">
        Već imaš račun?
        <span>
          <Link
            to={"/login"}
            className="text-underline"
            style={{ textDecoration: "underline" }}
          >
            Prijavi se
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
