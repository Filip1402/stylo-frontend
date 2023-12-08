import Button from "../Components/atoms/Button";
import Input from "../Components/atoms/Input";
import Textarea from "../Components/atoms/Textarea";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center px-4 relative py-4">
      <p className="text-xl text-center">Imate pitanja?</p>
      <h3 className="text-2xl text-center">Kontaktirajte nas</h3>
      <div className=" bg-white-light w-full px-6 py-9 rounded-lg mb-2  z-10  flex flex-col lg:py-16 lg:gap-8 max-w-[1200px]">
        <form
          id="loginForm"
          //onSubmit={handleSubmit}
          className="flex flex-col gap-3.5  lg:flex-row items-center"
        >
          <div className="flex flex-col gap-3.5 w-full ">
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
              type="text"
              name="password"
              onChange={() => {}}
              placeholder="Telefon *"
            />
          </div>

          <div className="w-full h-full  ">
            <Textarea
              // value={userData.password}
              //  error={errors.password}
              name="password"
              onChange={() => {}}
              placeholder="Poruka *"
              rows={"8"}
              cols="5"
            />
          </div>
        </form>
      </div>
      <div className="w-full max-w-[400px]">
        <Button form="loginForm" onClick={() => {}} type="submit">
          Pošalji poruku
        </Button>
      </div>
    </div>
  );
};

export default Contact;
