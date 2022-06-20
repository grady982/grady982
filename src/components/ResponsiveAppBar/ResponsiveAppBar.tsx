import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import grady2 from "../../assets/images/grady2.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ThemeMode } from "../../common/enum";
import { ThemeContext } from "../../context/ThemeContextProvider";

const settings = ["yo What's up"];

const ResponsiveAppBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onThemeBtnClick = () => {
    toggleTheme();
  };

  return (
    <AppBar position="static" color="neutral">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Grady Liu
          </Typography>

          {/* hamburger */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="Github" sx={{ p: "6px 10px" }}>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => {
                    window.open("https://github.com/grady982");
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </MenuItem>
              <MenuItem key="LinkedIn" sx={{ p: "6px 10px" }}>
                <IconButton
                  size="small"
                  color="inherit"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/liu-grady-1aa6621b6"
                    );
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </MenuItem>
              <MenuItem key="Theme" sx={{ p: "6px 10px" }}>
                <IconButton color="inherit" onClick={onThemeBtnClick}>
                  {theme === ThemeMode.Dark ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeOutlinedIcon />
                  )}
                </IconButton>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            Grady Liu
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem key="Github" sx={{ p: "6px 10px" }}>
              <IconButton
                size="small"
                color="inherit"
                onClick={() => {
                  window.open("https://github.com/grady982");
                }}
              >
                <GitHubIcon />
              </IconButton>
            </MenuItem>
            <MenuItem key="LinkedIn" sx={{ p: "6px 10px" }}>
              <IconButton
                size="small"
                color="inherit"
                onClick={() => {
                  window.open("www.linkedin.com/in/liu-grady-1aa6621b6");
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </MenuItem>
            <MenuItem key="Theme" sx={{ p: "6px 10px" }}>
              <IconButton color="inherit" onClick={onThemeBtnClick}>
                {theme === ThemeMode.Dark ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            </MenuItem>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Grady Liu" src={grady2} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
