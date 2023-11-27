import React, { useState, useEffect } from "react";

interface ShoeSizeSelectorProps {
  setSelectedShoeSizes: React.Dispatch<React.SetStateAction<number[]>>;
}

const ShoeSizeSelector: React.FC<ShoeSizeSelectorProps> = ({
  setSelectedShoeSizes,
}) => {
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const handleSizeChange = (size: number) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((item) => item !== size)
        : [...prevSizes, size]
    );
  };

  // Hardcoded 20 buttons for testing
  const hardcodedSizes = Array.from({ length: 20 }, (_, index) => index + 1);

  useEffect(() => {
    setSelectedShoeSizes(selectedSizes);
  }, [selectedSizes, setSelectedShoeSizes]);

  return (
    <div className="grid grid-cols-5 gap-4 p-4 bg-grey-darker w-fit">
      {hardcodedSizes.map((size) => (
        <div
          key={size}
          className="rounded-md border bg-white flex justify-center p-3 cursor-pointer h-min w-full"
          style={{
            border: "1px solid #5f83df",
            backgroundColor: selectedSizes.includes(size)
              ? "#5F83DF"
              : "#f8f8f8",
            color: selectedSizes.includes(size) ? "#F8F8F8" : "#343434",
          }}
          onClick={() => handleSizeChange(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default ShoeSizeSelector;
