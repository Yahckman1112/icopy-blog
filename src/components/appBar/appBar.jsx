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
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Menu from "@mui/icons-material/Menu";
import { pages } from "./pages";
import { Link } from "react-router-dom";
import "./appbar.css";

const AppBars = () => {
  const [anchorElNav, setanchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setanchorElNav(event.currentTarget);
  };
  // const open = Boolean(anchorElNav);
  const handleCloseNavMenu = () => {
    setanchorElNav(null);
  };
  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#F2F1EE", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <BookmarkIcon sx={{ display: { xs: "none", md: "flex" },  mr: 1 }} /> */}
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
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                keepMounted
                tranformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                 {pages.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    <Link to={page.href}> {page.text} </Link>

                    </Typography>
                  </MenuItem>
                ))}
               
              </Menu> 
              
            </Box>
            {/* <BookmarkIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
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
                  style={{ fontWeight: "bold", textTransform: "capitalize" }}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  href={page.href}
                  sx={{ my: 2, mx: 1, color: "black", display: "block" }}
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
