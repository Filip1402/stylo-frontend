import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface FooterItem {
  type: string;
  title: string;
  content: { url: string; text: string }[];
}

interface FooterResponse {
  data: Array<FooterItem>;
}

const Footer = () => {
  const response: FooterResponse = {
    data: [
      {
        type: "links",
        title: "Korisnička podrška",
        content: [
          {
            url: "www.youtube.com",
            text: "Nazovi nas: 091 123 321",
          },
          {
            url: "",
            text: "pon-pet 9:00 - 19:00",
          },
          {
            url: "",
            text: "podrska@stylo.com",
          },
        ],
      },
      {
        type: "links",
        title: "Pravilnici korištenja",
        content: [
          {
            url: "",
            text: "Uvjeti korištenja",
          },
          {
            url: "",
            text: "Pravila privatnosti",
          },
          {
            url: "",
            text: "Izjava o privatnosti",
          },
          {
            url: "",
            text: "Uporaba kolačića",
          },
        ],
      },
      {
        type: "links",
        title: "Vodič kroz online kupovinu",
        content: [
          {
            url: "",
            text: "Kako funkcionira?",
          },
          {
            url: "",
            text: "Kako se registrirati?",
          },
          {
            url: "",
            text: "Kako aktivirati račun?",
          },
        ],
      },
      {
        type: "social",
        title: "Zaprati nas na mrežama",
        content: [
          {
            url: "https://www.facebook.com/",
            text: "facebook-logo",
          },
          {
            url: "https://www.instagram.com/",
            text: "instagram-logo",
          },
          {
            url: "https://www.youtube.com/?",
            text: "youtube-logo",
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full mt-auto bg-grey-dark justify-center flex">
      <div className="grey-dark mt-auto pt-16 pb-16 max-w-screen-xl flex flex-col gap-8 bg-grey-dark text-white-light py-8 md:px-8 xl:px-0 md:flex-row">
        {response.data.map((el: FooterItem) => (
          <div key={el.title} className="flex flex-col gap-4">
            <h2 className="font-bold uppercase font text-lg flex flex-wrap">
              {el.title}
            </h2>
            {el.type == "links" && (
              <ul className="flex flex-col gap-2">
                {el.content.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            )}
            {el.type == "social" && (
              <ul className="flex gap-4">
                {el.content.map((item, index) => (
                  <Link to={item.url} target="_blank">
                    <div
                      key={index}
                      className="rounded-full bg-blue-middle w-fit p-2"
                    >
                      {item.text == "facebook-logo" && (
                        <FacebookLogo size={32} color="#242424" />
                      )}
                      {item.text == "instagram-logo" && (
                        <InstagramLogo size={32} color="#242424" />
                      )}
                      {item.text == "youtube-logo" && (
                        <YoutubeLogo size={32} color="#242424" />
                      )}
                    </div>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
