import FootwareType from "../Components/atoms/FootwareType";
import { FootwareTypeProps } from "../common/types";
import Tenisice from "../assets/images/tenisice.png";
import Cipele from "../assets/images/cipele.png";
import Cizme from "../assets/images/cizme.png";
import Japanke from "../assets/images/japanke.png";

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
  return (
    <div className="flex flex-col gap-6 max-w-[100rem] mx-auto p-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2">
      {mockFootwareTypes.map((type, index) => (
        <FootwareType key={index} footwareType={type} />
      ))}
    </div>
  );
};

export default ProductListCategories;
