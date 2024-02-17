import React from 'react'

function InputNumber() {
    const [count,setCount] = React.useState(1);

  return (
  <div className="cart-qty-plus-minus">
    <button type="button" className="plus" onClick={() => setCount(prevCount => prevCount +1)}>+</button>
    <input type="number" placeholder="." defaultValue={count} value={count} minLength={1} maxLength={20} className="quantity" />
    <button type="button" className="minus" onClick={()=>setCount(prevCount => prevCount -1 )}>-</button>
  </div>
  )

}

export default InputNumber