import React, { useState } from "react";
import { Faders, X } from "@phosphor-icons/react";
import ShoeSizeSelector from "./ShoeSizeSelector";
import ColorItemSelector from "./ColorItemSelector";
import { Color } from "../../common/types";

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedShoeSizes, setSelectedShoeSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilter = () => {
    setIsFilterVisible(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-end pr-6 flex-row">
        <button
          className="flex gap-4 py-3 px-2.5 bg-grey-darker rounded-lg text-20 text-white-light"
          onClick={toggleFilter}
        >
          {isFilterVisible ? "ZATVORI" : "FILTRIRAJ"}
          <Faders size={24} />
        </button>
      </div>

      {isFilterVisible && (
        <div className="flex justify-between absolute top-0 left-0 z-10 w-full h-96 bg-grey-darker text-white-light pl-16 pr-16 pt-10 pb-10">
          <button
            className="absolute right-2 pr-16 text-white-light cursor-pointer"
            onClick={closeFilter}
          >
            <X size={45} className="bg-white-light text-grey-dark rounded-md" />
          </button>
          <div className="flex gap-6 flex-col">
            <h3>Veličina</h3>
            <ShoeSizeSelector
              singleSelection={false}
              setSelectedShoeSizes={setSelectedShoeSizes}
              isGrid={true}
              sizes={[
                27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
              ]}
            />
          </div>

          <div className="flex gap-6 flex-col">
            <h3>Boja</h3>
            <ColorItemSelector
              isGrid={true}
              setSelectedColors={setSelectedColors}
              selectedColors={selectedColors}
            />
          </div>

          <div className="filter-buttons-wrapper flex justify-end flex-col w-[200px] gap-6">
            <button
              className="bg-blue-dark flex flex-row justify-center items-center w-full rounded-full border border-none 
  cursor-pointer text-12 font-bold px-4 py-2 text-white-light hover:bg-blue-darker "
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
