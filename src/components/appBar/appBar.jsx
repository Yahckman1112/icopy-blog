import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import Menu from "@mui/icons-material/Menu";
import {Link} from 'react-router-dom'


const AppBars = () => {

  const pages = [
    {
      text: 'Home',
      href:'/'
    },
    {
      text: 'About',
      href:'/about'
    },
  
    {
      text: 'Blog',
      href:'/blog'
    },
    
    {
      text: 'Portfolio',
      href:'/'
    },
    {
      text: 'Contact',
      href:'/contact'
    },
  
    ];
  
  const [anchorElNav, setanchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setanchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setanchorElNav(null);
  };
  return (
    <div className="container-fluid">
      <AppBar position="static" color="primary">
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            <BookmarkIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              // component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "fllex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              IcopyStory
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onclick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                tranformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} >
                    <Link to={page.href}> {page.text} </Link>
                    {/* <Typography textAlign="center"></Typography> */}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <BookmarkIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  href= {page.href}
                  sx={{ my: 2, color: "white", display: "black" }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default AppBars;
