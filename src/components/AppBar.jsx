import React, { useState, useEffect } from "react";
import {
  Box,
  Link,
  Hidden,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { MyColors } from "../theme/colors";
import PersonalLogo from "../assets/images/personal_logo.png";
import { ResumeLink } from "../config";

function AppBar() {
  const [showAppBar, setShowAppBar] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    let previousScrollPosition = 0;

    document.querySelector("#app-root").addEventListener("scroll", () => {
      var position = document.querySelector("#app-root").scrollTop;
      if (position > previousScrollPosition) {
        setShowAppBar(false);
        previousScrollPosition = position;
      } else if (previousScrollPosition > position) {
        setShowAppBar(true);
        previousScrollPosition = position;
      }
    });
  }, []);

  return (
    <Box
      sx={
        showAppBar
          ? {
              position: "fixed",
              backgroundColor: MyColors.background,
              width: "100%",
              height: "px",
              display: "flex",
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "px",
              paddingLeft: "48px",
              paddingRight: "48px",
              transition: "all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1)",
              transform: "translateY(0)",
              [theme.breakpoints.down("sm")]: {
                paddingLeft: "16px",
                paddingRight: "4px",
              },
            }
          : {
              position: "fixed",
              backgroundColor: MyColors.background,
              width: "100%",
              display: "flex",
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "48px",
              paddingRight: "48px",
              transition: "all 0.50s cubic-bezier(0.645, 0.045, 0.355, 1)",
              transform: "translateY(-100px)",
            }
      }
    >
      <Hidden smDown>
        <Link href="/">
          <Box
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              backgroundColor: "#FAFAFA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={PersonalLogo}
              alt="Business Logo"
              style={{ height: "50px" }}
            />
          </Box>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ width: "125px", textAlign: "center" }}>
          <Link
            href="#about"
            variant="body1"
            color="secondary"
            underline="none"
          >
            About
          </Link>
        </Box>
        <Box sx={{ width: "125px", textAlign: "center" }}>
          <Link
            href="#expertise"
            variant="body1"
            color="secondary"
            underline="none"
          >
            Experience
          </Link>
        </Box>
        <Box sx={{ width: "125px", textAlign: "center" }}>
          <Link
            href="#projects"
            variant="body1"
            color="secondary"
            underline="none"
          >
            Projects
          </Link>
        </Box>
        <Box sx={{ width: "125px", textAlign: "center" }}>
          <Link
            href="#contact"
            variant="body1"
            color="secondary"
            underline="none"
          >
            Contact
          </Link>
        </Box>
        <Box sx={{ marginLeft: "16px" }}>
          <Button
            variant="outlined"
            color="secondary"
            component="a"
            href={ResumeLink}
          >
            Resume
          </Button>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Link href="/">
          <Box
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              backgroundColor: "#FAFAFA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={PersonalLogo}
              alt="Business Logo"
              style={{ height: "40px" }}
            />
          </Box>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon color="secondary" sx={{ width: "36px", height: "36px" }} />
        </IconButton>
      </Hidden>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            maxWidth: "300px",
            minWidth: "250px",
            backgroundColor: MyColors.background,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ height: "200px" }}></Box>
          <List>
            <ListItem button component="a" key={"about"} href="#about">
              <ListItemText
                sx={{ color: MyColors.secondary, textAlign: "center" }}
                primary="About"
              />
            </ListItem>
            <ListItem button component="a" key={"expertise"} href="#expertise">
              <ListItemText
                sx={{ color: MyColors.secondary, textAlign: "center" }}
                primary="Experience"
              />
            </ListItem>
            <ListItem button component="a" key={"projects"} href="#projects">
              <ListItemText
                sx={{ color: MyColors.secondary, textAlign: "center" }}
                primary="Projects"
              />
            </ListItem>
            <ListItem button component="a" key={"contact"} href="#contact">
              <ListItemText
                sx={{ color: MyColors.secondary, textAlign: "center" }}
                primary="Contact"
              />
            </ListItem>
          </List>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              component="a"
              href={ResumeLink}
            >
              Resume
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default AppBar;
