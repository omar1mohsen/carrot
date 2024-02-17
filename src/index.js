import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router from './routes/router';
import { Toaster } from 'react-hot-toast';
import ScrollTopBtn from './shared-components/ScrollTopBtn';
// Import  styles
import 'swiper/css';
import 'remixicon/fonts/remixicon.css'
import './globals.css'
// Import  Scripts
import './scripts/jquery';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
    <ScrollTopBtn />
   </React.StrictMode>
);


