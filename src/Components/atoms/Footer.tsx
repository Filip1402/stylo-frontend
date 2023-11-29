import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { FooterItem, LayoutData } from "../../common/types";
import { FC, useEffect, useState } from "react";

const Footer: FC<{ layoutData: LayoutData | null }> = ({ layoutData }) => {
  const [footerData, setFooterData] = useState<Array<FooterItem> | null>([]);

  useEffect(() => {
    layoutData && setFooterData(layoutData?.layout.footer.footerContent.data);
  }, [layoutData]);

  return (
    <div className="w-full mt-auto bg-grey-dark justify-center flex">
      <div className="max-w-7xl mx-auto flex flex-col p-4 w-full justify-between bg-grey-dark text-white-light md:px-8 lg:px-4 md:flex-row">
        {footerData
          ? footerData.map((el: FooterItem) => (
              <div key={el.title} className="flex flex-col gap-4">
                <h2 className="font-bold uppercase font text-lg flex flex-wrap mt-4">
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
                  <ul className="flex gap-4 justify-center md:justify-normal">
                    {el.content.map((item, index) => (
                      <Link to={item.url} target="_blank" key={index}>
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
            ))
          : null}
      </div>
    </div>
  );
};

export default Footer;
