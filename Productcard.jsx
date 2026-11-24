import React from "react";

function ProductCard({ name, price }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "180px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default ProductCard;