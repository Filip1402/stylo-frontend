import Button from "../Components/atoms/Button";
import Input from "../Components/atoms/Input";
import Textarea from "../Components/atoms/Textarea";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center px-4 relative">
      <div className=" bg-white-light w-full px-6 py-9 rounded-lg mb-2 max-w-lg z-10  flex flex-col lg:py-16 lg:gap-8">
        <p className="text-xl text-center">Imate pitanja?</p>
        <h3 className="text-2xl text-center">Kontaktirajte nas</h3>
        <form
          id="loginForm"
          //onSubmit={handleSubmit}
          className="flex flex-col gap-3.5 my-5"
        >
          <Input
            // value={userData.email}
            // error={errors.email}
            name="email"
            onChange={() => {}}
            type="email"
            placeholder="Ime *"
          />
          <Input
            // value={userData.password}
            //  error={errors.password}
            type="text"
            name="password"
            onChange={() => {}}
            placeholder="Prezime *"
          />

          <Input
            // value={userData.password}
            //  error={errors.password}
            type="text"
            name="password"
            onChange={() => {}}
            placeholder="Email *"
          />

          <Input
            // value={userData.password}
            //  error={errors.password}
            type="password"
            name="password"
            onChange={() => {}}
            placeholder="Telefon *"
          />

          <Textarea
            // value={userData.password}
            //  error={errors.password}
            name="password"
            onChange={() => {}}
            placeholder="Telefon *"
            rows={"10"}
            cols="5"
          />
        </form>
        <Button form="loginForm" onClick={() => {}} type="submit">
          Pošalji poruku
        </Button>
      </div>
    </div>
  );
};

export default Contact;
