import React from "react";
import Fliter from "./Fliter";
import Products from "./Products";

function Items({ category }) {
  return (
    <main className="tre-section">
      <div className="container">
        <div className="tre-products-wrap d-flex-center">
            <Fliter />
            <Products category={category} />
        </div>
      </div>
    </main>
  );
}

export default Items;
