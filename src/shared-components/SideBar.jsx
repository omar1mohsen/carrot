import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import Cart from './Cart'
export default function SideBar() {
  const [state, setState] = React.useState(false);

  const handleToggle = (open)=>()=> {
    setState(open);
  };

  const list = () => (
    <Box
      role="presentation"
      className="tre-sidebar"
    >
        <div className='tre-sidebar-header'>
            <span className='tre-sidebar-title'>My Menu</span>
            <span
            onClick={handleToggle(false)} 
            className='tre-colse-sidebar'>
                <i className="ri-close-line"></i>
                </span>
        </div>
      <List>
        {['Home', 'About Us', 'Send email', 'Content Us','Support Center'].map((text, index) => (
          <ListItem key={index} className='tre-sideBar-item'>
                <Link to="#">{text}</Link>
          </ListItem>
        ))}
        <Cart className="tre-sidebar-cart"/>
      </List>
    </Box>
  );

  return (
        <React.Fragment>
          <Button 
          onClick={handleToggle( true)}
          className='tre-menuBtn'
          >
          <i className="ri-menu-line"></i>
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