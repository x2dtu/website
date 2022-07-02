import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;
  const navItems = ["Home", "About Me", "Experience", "Skills", "Projects"];
  const [mobileDrawerTitle, setMobileDrawerTitle] = useState("Home");
  const [yPosition, setYPosition] = useState(0);

  function getID(item) {
    return item.split(" ").join("-").toLowerCase();
  }

  useEffect(() => {
    const handleScroll = () => setYPosition(window.pageYOffset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const posArray = navItems.map((item) => {
      const id = getID(item);
      return (
        document.getElementById(id).getBoundingClientRect().top +
        window.scrollY -
        64 // subtract 64 since that is the height in pixels of the toolbar regardless of screen type
      );
    });
    let pageNumber = posArray.length - 1;
    while (yPosition < Math.floor(posArray[pageNumber])) {
      pageNumber--;
    }
    setMobileDrawerTitle(navItems[pageNumber]);
  }, [yPosition]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {mobileDrawerTitle}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link href={`#${getID(item)}`}>
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
            <Button
              key={item}
              sx={{
                color: "white",
                display: { xs: "none", sm: "block" },
                py: "1.25em",
                width: "10em",
                textAlign: "center",
              }}
              className={mobileDrawerTitle == item ? "focused" : null}
              href={`#${getID(item)}`}
            >
              {item}
            </Button>
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

export default DrawerAppBar;
