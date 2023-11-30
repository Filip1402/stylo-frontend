import FootwareType from "../Components/atoms/FootwareType";
import { FootwareTypeProps } from "../common/types";
import Tenisice from "../assets/images/tenisice.png";
import Cipele from "../assets/images/cipele.png";
import Cizme from "../assets/images/cizme.png";
import Japanke from "../assets/images/japanke.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const mockFootwareTypes: FootwareTypeProps[] = [
  {
    title: "Tenisice",
    image: Tenisice,
  },
  {
    title: "Cipele",
    image: Cipele,
  },
  {
    title: "Čizme",
    image: Cizme,
  },
  {
    title: "Japanke",
    image: Japanke,
  },
];

const ProductListCategories = () => {
  const { type } = useParams();

  return (
    <div className="flex flex-col gap-6 max-w-[100rem] mx-auto p-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2">
      {mockFootwareTypes.map((footware, index) => (
        <Link
          to={`/proizvodi/${type}/${footware.title.toLowerCase()}`}
          key={index}
        >
          <FootwareType footwareType={footware} />
        </Link>
      ))}
    </div>
  );
};

export default ProductListCategories;
