import React, { useState } from 'react'
import Btn from "../../../shared-components/Btn";
import { Slider } from "@mui/material";
import AnimateBox from '../../../shared-components/AnimateBox';

function Fliter() {
    const [price,Setprice]=useState([20, 500]);
    const handleChange = (event, newValue) => {
      Setprice(newValue);
    };
  return (
    <div className="w-1/4 tre-products-fliter">
          <AnimateBox delay={0.2}>
            <div className="tre-fliter-wrap">
              <h4>Category</h4>
              <div className="tre-checkbox">
                  <div className="checkbox-group">
                    <input type="checkbox" name="myCheckbox" defaultValue="all" id='all' className='tre-fliter-checkbox' />
                    <label htmlFor="all">All</label> 
                    <span>[20]</span>
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" name="myCheckbox" defaultValue="electronics" id="electronics" className='tre-fliter-checkbox' />
                  <label htmlFor="electronics">Electronics &amp; Computers</label>
                  <span>[54]</span>
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" name="myCheckbox" defaultValue="jewelery" id="jewelery" className='tre-fliter-checkbox' />
                    <label htmlFor="jewelery">jewelery</label>
                    <span>[64]</span>
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" name="myCheckbox" defaultValue="women's clothing" id="women's clothing" className='tre-fliter-checkbox' />
                     <label htmlFor="women's clothing">women's clothing</label>
                    <span>[34]</span>
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" name="myCheckbox" defaultValue="men's clothing" id="men's clothing" className='tre-fliter-checkbox' />
                     <label htmlFor="men's clothing">men's clothing</label>
                    <span>[84]</span>
                  </div>
                </div>
              <h4 className="tre-shop-sub-title">Price</h4>
              <div className="price-range-slider">
                <Slider
                  size="small"
                  defaultValue={price}
                  min={0}
                  max={1000}
                  value={price}
                  onChange={handleChange}               />
                <p className="range-value">
                  <label>Price : <span className="tre-range">{price.map(price=> <span key={price}>${price}</span>)}</span> </label>
                </p>
                <Btn title="fliter" className="tre-fliter-btn"/>
              </div>
            </div>
            </AnimateBox>
          </div>
  )
}

export default Fliter