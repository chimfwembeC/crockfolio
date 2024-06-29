import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CssBaseline from '@mui/material/CssBaseline';
import AdSenseAd from '../components/AdSenseAd';

const FooterComponent = () => {
  return (
    <Box sx={{ p: 3, mt: 'auto', backgroundColor: 'primary.dark', color: 'white', textAlign: 'center' }}>
      <CssBaseline />      
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Contact Me</Typography>
        <IconButton
          component="a"
          href="mailto:youremail@example.com"
          color="inherit"
          aria-label="email"
        >
          <FaEnvelope />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/ChimfwembeC"
          target="_blank"
          color="inherit"
          aria-label="GitHub"
        >
          <FaGithub />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          color="inherit"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/yourusername"
          target="_blank"
          color="inherit"
          aria-label="Twitter"
        >
          <FaTwitter />
        </IconButton>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Quick Links</Typography>
        <Box>
          <Typography variant="body2">
            <a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          </Typography>
          <Typography variant="body2">
            <a href="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
          </Typography>
          <Typography variant="body2">
            <a href="/resume" style={{ color: 'inherit', textDecoration: 'none' }}>Resume</a>
          </Typography>
          <Typography variant="body2">
            <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
<AdSenseAd />
    </Box>
  );
};

export default FooterComponent;
