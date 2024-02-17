import React from 'react'
import AnimateBox from '../../../shared-components/AnimateBox'

function Header({category}) {
  return (
    <AnimateBox>
      <div className='tre-category-title'>
        <div className='container'>
          <h2>Shop</h2>
          <span>Products - <span>{category}</span></span>
        </div>
      </div>
    </AnimateBox>
  )
}

export default Header