// layout/Layout.js
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import AppBarComponent from './AppBarComponent';
import FooterComponent from './FooterComponent';

import { Outlet } from "react-router-dom";
const Layout = () => (

  <div>
    <header>
      <nav>
        <AppBarComponent />
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  <FooterComponent />
  </div>
);
export default Layout;
