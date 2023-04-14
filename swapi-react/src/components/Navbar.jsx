import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import logo from "../assets/Star-Wars-Logo-1.png";

import { Menu, People, Public, Flight } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  linkButton: {
    color: "white",
    textDecoration: "none",
  },
  button: {
    fontSize: "1rem",
    fontWeight: 500,
    color: "#fff",
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#ffc752",
      color: "#000",
    },
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    height: 50, // set the height of the logo to 50px
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const menuItems = [
    {
      text: "People",
      icon: <People />,
      link: "/",
    },
    {
      text: "Planets",
      icon: <Public />,
      link: "/components/planets",
    },
    {
      text: "Starships",
      icon: <Flight />,
      link: "/components/starships",
    },
  ];

  const menu = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.text} component={Link} to={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/" className={classes.menuButton} color="inherit" onClick={handleDrawerOpen}>
            <Menu />
          </IconButton>
          <div  className={classes.title} component={Link} to="/">
          <img src={logo} alt="Logo" className={classes.logo} />
          </div >
          <Button className={classes.button} component={Link} to="/" startIcon={<People />}>
            People
          </Button>
          <Button className={classes.button} component={Link} to="/components/planets" startIcon={<Public />}>
            Planets
          </Button>
          <Button className={classes.button} component={Link} to="/components/starships" startIcon={<Flight />}>
            Starships
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} anchor="left" open={openDrawer} onClose={handleDrawerClose} classes={{ paper: classes.drawerPaper }}>
        {menu}
      </Drawer>
    </div>
  );
};

export default Navbar;
