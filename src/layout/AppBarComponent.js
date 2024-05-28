import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "./ThemeContext";
import { styled } from "@mui/material/styles";
import { Box, Stack, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { FaGithub, FaEnvelope, FaUser, FaFileAlt, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import Switch from "@mui/material/Switch";
import Hidden from '@mui/material/Hidden';


// Define the custom MaterialUISwitch component
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

// Define the AppBarComponent
const AppBarComponent = () => {
  const { mode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box>
              {/* Hide the menu icon on larger screens */}
              <Hidden mdUp>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMobileMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <MaterialUISwitch
                checked={mode === 'dark'}
                onChange={toggleTheme}
                aria-label="toggle theme"
              />
              {/* Show menu items only on larger screens */}
              <Hidden smDown>
                <IconButton
                  component="a"
                  href="/contact"
                  color="inherit"
                  aria-label="contact"
                >
                  <FaEnvelope />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/ChimfwembeC"
                  target="_blank"
                  color="inherit"
                  aria-label="GitHub Star"
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  component="a"
                  href="/about"
                  color="inherit"
                  aria-label="about"
                >
                  <FaUser />
                </IconButton>
                <IconButton
                  component="a"
                  href="/resume"
                  color="inherit"
                  aria-label="resume"
                >
                  <FaFileAlt />
                </IconButton>
                <IconButton
                  component="a"
                  href="/skills"
                  color="inherit"
                  aria-label="skills"
                >
                  <FaLightbulb />
                </IconButton>
                <IconButton
                  component="a"
                  href="/projects"
                  color="inherit"
                  aria-label="projects"
                >
                  <FaProjectDiagram />
                </IconButton>
              </Hidden>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Mobile menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <List>
          <ListItem button component="a" href="/contact" onClick={handleMobileMenuClose}>
            <ListItemIcon>
              <FaEnvelope />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component="a" href="https://github.com/ChimfwembeC" target="_blank" onClick={handleMobileMenuClose}>
            <ListItemIcon>
              <FaGithub />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
          {/* Add other menu items here */}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default AppBarComponent;
