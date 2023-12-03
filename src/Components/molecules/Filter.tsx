import { useState } from "react";
import { Faders, X } from "@phosphor-icons/react";
import ShoeSizeSelector from "./ShoeSizeSelector";
import ColorItemSelector from "./ColorItemSelector";
import { Color } from "../../common/types";
import { colors } from "../../common/constants";

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedShoeSizes, setSelectedShoeSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);
  const [productColors, setProductColors] = useState<Color[]>([]);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilter = () => {
    setIsFilterVisible(false);
  };

  const clearFilter = () => {
    // Log selected shoe sizes to the console
    console.log("Selected Shoe Sizes:", selectedShoeSizes);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center flex-row p-6 ">
        <h3 className="text-xl font-bold">Kakvu odjeću tražite?</h3>
        <button
          className="flex gap-4 py-3 px-2.5 bg-grey-darker rounded-lg text-20 text-white-light"
          onClick={toggleFilter}
        >
          {isFilterVisible ? "ZATVORI" : "FILTRIRAJ"}
          <Faders size={24} />
        </button>
      </div>

      {isFilterVisible && (
        <div className="flex flex-col h-fit gap-6 justify-between absolute top-0 left-0 z-10 w-full align-middle  bg-grey-darker text-white-light pl-8 pr-8 pt-10 pb-10 lg:flex-row lg:h-96 lg:align-baseline">
          <button
            className="relative flex justify-end  pr-0 lg:absolute  text-white-light cursor-pointer lg:justify-normal lg:right-10  "
            onClick={closeFilter}
          >
            <X size={45} className="bg-white-light text-grey-dark rounded-md" />
          </button>
          <div className="flex gap-6 flex-col items-center lg:items-baseline ">
            <h3>Veličina</h3>
            <ShoeSizeSelector
              singleSelection={false}
              setSelectedShoeSizes={setSelectedShoeSizes}
              isGrid={true}
              sizes={[
                27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
              ]}
              selectedSizes={selectedShoeSizes}
            />
          </div>

          <div className="flex gap-6 flex-col items-center lg:items-baseline">
            <h3>Boja</h3>
            <ColorItemSelector
              colors={colors}
              isGrid={true}
              setSelectedColors={setSelectedColors}
              selectedColors={selectedColors}
            />
          </div>

          <div className="filter-buttons-wrapper flex justify-end flex-col w-[200px] gap-6 mx-auto lg:mx-0">
            <button
              className="bg-blue-dark flex flex-row justify-center items-center w-full rounded-full border border-none 
  cursor-pointer text-12 font-bold px-4 py-2 text-white-light hover:bg-blue-darker "
              onClick={clearFilter}
            >
              OČISTI FILTER
            </button>
            <button
              className="bg-white-light flex flex-row justify-center items-center w-full rounded-full border border-none 
  cursor-pointer text-12 font-bold px-4 py-2 text-blue-dark hover:bg-grey-middle "
            >
              PRIMJENI FILTER
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
