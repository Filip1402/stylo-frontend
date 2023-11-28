import React from "react";
import { Link } from "react-router-dom";
import { FC } from "react";
import { FootwareTypeProps } from "../../common/types";

const FootwareType: FC<{ footwareType: FootwareTypeProps }> = ({
  footwareType,
}) => {
  return (
    <Link to="/proizvodi&tip_osoblja=muskarci">
      <div className="relative h-80 lg:h-[350px] xl:h-500">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <img
            src={footwareType.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="absolute bottom-1 left-0 m-0 pl-4 text-white w-full box-border font-bold text-2xl bg-black/60 pt-4 pb-4 my-2">
          {footwareType.title}
        </h3>
      </div>
    </Link>
  );
};

export default FootwareType;
