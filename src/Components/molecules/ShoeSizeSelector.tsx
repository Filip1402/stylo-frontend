import React, { useState, useEffect } from "react";
import "./ShoeSizeSelector.scss";

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
    <div className="shoe-size-selector-wrapper">
      {hardcodedSizes.map((size) => (
        <div
          key={size}
          className={`shoe-size-selector-item ${
            selectedSizes.includes(size) ? "active" : ""
          }`}
          onClick={() => handleSizeChange(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default ShoeSizeSelector;
