import { Faders } from "@phosphor-icons/react";

const Filter = () => {
  return (
    <div className="flex gap-2 justify-end items-center text-white-light p-2 max-w-[1600px] mx-auto ">
      <button className="flex gap-4 py-3 px-2.5 bg-grey-darker rounded-lg text-20">
        FILTRIRAJ
        <Faders size={24} />
      </button>
    </div>
  );
};

export default Filter;
