import React from "react";
import Toggle from "../Toggle/Toggle";
import { AppBar, Toolbar, Typography, Button, List, ListItem } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import './Navbar.css'; // Ensure this import is correct

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        {/* left */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#A9A9A9' }}>
          Mock_Interview
        </Typography>
        <Toggle />
        {/* right */}
        <List sx={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0 }}>
          <ListItem>
            <ScrollLink activeClass="active" to="Navbar" spy={true} smooth={true}>
              <Button color="inherit">Home</Button>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink to="services" spy={true} smooth={true}>
              <Button color="inherit">Services</Button>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink to="works" spy={true} smooth={true}>
              <Button color="inherit">Experience</Button>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink to="testimonial" spy={true} smooth={true}>
              <Button color="inherit">Testimonial</Button>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink to="caro" spy={true} smooth={true}>
              <Button color="inherit">Work</Button>
            </ScrollLink>
          </ListItem>
          
          <ListItem>
            <RouterLink to="/signin" style={{ textDecoration: 'none' }}>
              <Button color="inherit">SignIn</Button>
            </RouterLink>
          </ListItem>
        </List>
        <ScrollLink to="contact" spy={true} smooth={true}>
          <Button variant="contained" sx={{ backgroundColor: '#FCA61F', color: 'white', borderRadius: '50px', '&:hover': { backgroundColor: '#e5941a' } }}>Contact</Button>
        </ScrollLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
