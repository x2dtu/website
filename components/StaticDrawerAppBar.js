import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Link from "next/link";

const StaticDrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;
  const navItems = ["Home", "About Me", "Experience", "Skills", "Projects"];

  function getID(item) {
    return item.split(" ").join("-").toLowerCase();
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link href={`/#${getID(item)}`}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" color="secondary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "space-evenly" },
            minHeight: "64px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ml: "0.5em", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {navItems.map((item) => (
            <Link href={`/#${getID(item)}`}>
              <Button
                key={item}
                sx={{
                  color: "white",
                  display: { xs: "none", sm: "block" },
                  py: "1.25em",
                  width: "10em",
                  textAlign: "center",
                  fontSize: { xl: "1em" },
                }}
              >
                {item}
              </Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default StaticDrawerAppBar;
