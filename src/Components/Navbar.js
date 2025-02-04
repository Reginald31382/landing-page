import React, { useState } from "react";
import Logo from "../Assets/logoipsum-349.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AddBox, DrawRounded } from "@mui/icons-material";
import { List } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItem } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Info } from "@mui/icons-material";
import { CommentRounded } from "@mui/icons-material";
import { PhoneRounded } from "@mui/icons-material";
import { ShoppingCartRounded } from "@mui/icons-material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <Home />,
    },
    {
      text: "Home",
      icon: <Info />,
    },
    {
      text: "Home",
      icon: <CommentRounded />,
    },
    {
      text: "Home",
      icon: <PhoneRounded />,
    },
    {
      text: "Home",
      icon: <ShoppingCartRounded />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="protologo" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        />
      </div>
      <DrawRounded
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <AddBox
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AddBox>
      </DrawRounded>
    </nav>
  );
};

export default Navbar;
