import { useRef, useState } from "react";
import Button from "../Components/atoms/Button";
import Input from "../Components/atoms/Input";
import Textarea from "../Components/atoms/Textarea";
import { notifyFailure, notifySuccess } from "../Components/atoms/Toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [mail, setMail] = useState("");
  const [description, setDescription] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const form = useRef();

  async function sendEmail(e) {
    console.log("Pozivam se");
    e.preventDefault();

    if (mail === "" || description === "") {
      notifyFailure("Unesite email i tekst poruke!");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_rididoi",
        "template_a52kz4o",
        form?.current,
        "uEv5XssPSUZAjRkfW"
      );
      console.log("Uspjesno poslano");
      notifySuccess("Podrška uspješno kontaktirana!");
    } catch (err) {
      console.log("Doslo je do pogreske");
      notifyFailure("Došlo je do pogreške");
    }
  }
  return (
    <div className="flex justify-center flex-col items-center px-4 relative py-4">
      <p className="text-xl text-center">Imate pitanja?</p>
      <h3 className="text-2xl text-center">Kontaktirajte nas</h3>
      <div className=" bg-white-light w-full px-6 py-9 rounded-lg mb-2  z-10  flex flex-col lg:py-16 lg:gap-8 max-w-[1200px]">
        <form
          id="loginForm"
          //onSubmit={handleSubmit}
          className="flex flex-col gap-3.5  lg:flex-row items-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-5 w-full ">
            <Input
              value={firstName}
              name="first_name"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Ime *"
            />
            <Input
              value={lastName}
              name="last_name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Prezime *"
            />

            <Input
              value={mail}
              name="email"
              onChange={(e) => setMail(e.target.value)}
              type="text"
              placeholder="Email *"
            />

            <Input
              value={phone}
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefon *"
            />
          </div>

          <div className="w-full h-full  ">
            <Textarea
              // value={userData.password}
              //  error={errors.password}
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Poruka *"
              rows={"10"}
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
