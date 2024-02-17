import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import handleTitle from '../utilits/HandleTitle';
import InputNumber from './InputNumber';
import toast from 'react-hot-toast';

export default function Cart({className}) {
  const [state, setState]      = React.useState(false),
        [products,setProducts] = React.useState([]);

React.useEffect(()=>{
 setProducts(JSON.parse(localStorage.getItem("cart_items")))
},[state])

const handleToggle = (open) => () => {
  setState(open);
};

const handleDelete = (id)=>{
  let new_storage = products.filter(item=> item.id !== id )
  localStorage.setItem('cart_items', JSON.stringify(new_storage));
  setProducts([...new_storage]);
  toast.success("Product has been deleted");
}

  const list = () => (
    <Box
      role="presentation"
      className="tre-cart"
    >
        <div className="tre-cart-header">
            <span className='tre-cart-title'>My Cart</span>
            <span
            onClick={handleToggle(false)} 
            className='tre-close-cart'>
                <i className="ri-close-line"></i>
            </span>
        </div>
        {products && products.length ?
        (
          <> 
          <List>
          {products?.map((product, index) => (
           <ListItem key={index} className='tre-pcart-card'>
                 <span className='tre-pcart-btn' onClick={()=>{handleDelete(product.id)}}>
                     <i className="ri-close-line"></i>
                 </span>
                 <div className='tre-pcart-image-wrap'>
                   <img src={product.image} className='tre-pcart-image' alt={product.title}/>
                 </div>
                   <div className='tre-pcart-content'>
                     <span className='tre-pcart-title'>
                       {handleTitle(product.title ,60)}
                     </span>
                     <span className='tre-pcart-price'>$ {product.price} </span>
                     <InputNumber/>
                   </div>
           </ListItem>
         ))}
       </List>
         <div className='tre-checkout-wrap'>
           <span>Sub-Total :	<span>300.00$</span></span>
           <span>VAT (20%) :	<span>60.00$</span></span>
           <span>Total : <span>360.00$</span></span>
         </div>
         </>
        ):<span>Get Some Products :)</span> }
    </Box>
  );

  return (
        <React.Fragment>
          <Button 
          onClick={handleToggle( true)}
          className={`tre-cart-btn ${className ? className : ""}`}
          >
            <i className="ri-shopping-cart-line" />
            <span>Cart</span>
          </Button>
          
          <Drawer
            open={state}
            onClose={handleToggle(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
  );
}