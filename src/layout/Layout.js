// layout/Layout.js
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import AppBarComponent from './AppBarComponent';
import FooterComponent from './FooterComponent';

import { Outlet } from "react-router-dom";
const Layout = () => (
const AdSenseAd = () => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  <div>
    <header>
      <nav>
        <AppBarComponent />
      </nav>
    </header>
    <main>
      <Outlet />
<ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6221660864872022" // Replace with your client ID
      data-ad-slot="1234567890" // Replace with your ad slot ID
      data-ad-format="auto"
    />
    </main>
  <FooterComponent />
  </div>
);
export default Layout;
