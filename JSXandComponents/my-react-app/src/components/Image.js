import React from "react";
import product from "../data/product";

const Image = () => {
  return (
    <img
      src={product.image}
      alt={product.name}
      style={{
        width: "100%", // Make the image take the full width of the card
        height: "auto", // Maintain the aspect ratio
        borderRadius: "8px", // Optional: Add rounded corners
      }}
    />
  );
};

export default Image;
