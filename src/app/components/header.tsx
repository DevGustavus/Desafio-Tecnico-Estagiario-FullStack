"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Logo } from "../icons/logo";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme } from "@mui/material/styles";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const pages = ["Home"];
const settings = [
  "Lista de amigos",
  "Artigos salvos",
  "Notificações",
  "Preferências",
  "Fechar sessão",
];

function CustomHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <Stack direction="row" alignItems="center">
            <Logo />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="#home"
              sx={{
                ml: 1,
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                color: "#8556AA",
              }}
            >
              Bem-Vindo
            </Typography>
            <ChevronRightIcon fontSize="small" className="text-gray-600" />
            <Typography
              variant="body1"
              noWrap
              component={Link}
              href="#registro"
              sx={{
                mr: 2,
                ml: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans-serif",
                fontWeight: 500,
                letterSpacing: ".1rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              Registro
            </Typography>
          </Stack>

          <Stack direction={"row"} alignItems="center" spacing={1}>
            <Stack direction={"row"} className="border-r-2 pr-6">
              <Tooltip title="Help">
                <IconButton>
                  <HelpOutlineIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Apps">
                <IconButton>
                  <AppsIcon />
                </IconButton>
              </Tooltip>
            </Stack>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="default"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <IconButton>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                className="cursor-auto"
              />
            </IconButton>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings" onClick={handleOpenUserMenu}>
                <Typography className="text-gray-700 cursor-pointer">
                  Nome de Usuário
                </Typography>
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
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomHeader;
