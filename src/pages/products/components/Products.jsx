import React, { useEffect, useState } from "react";
import fetchData from "../../../utilits/fetchData";
import ProductCard from "../../../shared-components/ProductCard";
import Loading from "../../../shared-components/Loading";
import AnimateBox from "../../../shared-components/AnimateBox";

function Products({ category }) {
  const [items, setItems] = useState([]),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `${process.env.REACT_APP__ALL_PRODUCTS_URL}${
        category !== "all" ? `/category/${category}` : ""
      }`
    ).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [category]);

  return (
    <div className="w-3/4 tre-products-contanier">
      <AnimateBox delay={0.2}>
        <div className="tre-shop-bredekamp">
          <div className="tre-list-toggle">
            <span
              className="gridCol tre-list-style active-grid"
              data-style="tre-listing-col"
            >
              <i className="ri-grid-line" />
            </span>
            <span
              className="gridRow tre-list-style"
              data-style="tre-listing-row"
            >
              <i className="ri-list-check-2" />
            </span>
          </div>
          <div className="center-content">
            <span>We found 29 items for you!</span>
          </div>
          <div className="tre-select">
            <label>Sort By :</label>
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Featured</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={4}>Four</option>
              <option value={5}>Five</option>
            </select>
          </div>
        </div>
      </AnimateBox>
      <AnimateBox delay={0.2}>
        <div className="tre-products">
          {loading ? (
            <Loading />
          ) : (
            items?.map((product, index) => {
              return (
                <ProductCard product={product} key={index} className="w-4/12" />
              );
            })
          )}
        </div>
      </AnimateBox>
    </div>
  );
}

export default Products;
