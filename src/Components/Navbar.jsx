import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import Cart from "./Cart";
import { useAppSelector } from "../store/hooks";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import DinnerDining from "@mui/icons-material/DinnerDiningOutlined";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  console.log(cartQuantity);

  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout"; // detect checkout page

  const handleOpenCart = () => {
    setOpenMenu(false);
    setCartVisible(true);
  };

  const handleCloseCart = () => {
    setOpenMenu(true);
    setCartVisible(false);
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      ItemId: "#home",
    },
    {
      text: "Dishes",
      icon: <InfoIcon />,
      ItemId: "#dishes",
    },
    {
      text: "Sides",
      icon: <CommentRoundedIcon />,
      ItemId: "#sides",
    },
    {
      text: "Drinks",
      icon: <CommentRoundedIcon />,
      ItemId: "#drinks",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      ItemId: "#contact",
    },
    {
      text: "Tray",
      icon: <DinnerDining />,
      func: handleOpenCart,
      qtn: `(${cartQuantity})`,
    },
  ];

  return (
    <nav>
      {cartVisible && <Cart onClose={() => setCartVisible(false)} />}
      <div className="nav-logo-container">
        <Link to="/" className="nav">
          <h1>9ja Kitchen</h1>
        </Link>
        {/* <h1>9ja Kitchen</h1> */}
      </div>

      {!isCheckoutPage && (
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#dishes">Dishes</a>
          <a href="#sides">Sides</a>
          <a href="#drinks">Drinks</a>
          <a href="#contact">Contact Us</a>

          <button onClick={() => setCartVisible(true)} className="cart-btn">
            <BsCart2 className="navbar-cart-icon" /> View Tray ({cartQuantity})
          </button>
        </div>
      )}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
        className="side-drawer"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            <HiOutlineBars3
              onClick={() => setOpenMenu(false)}
              className="close-btn"
            />
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton href={item.ItemId} onClick={item.func}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  <ListItemText>{item.qtn}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            {/* <button onClick={handleOpenCart} className="nav-cart-btn">
              <ShoppingCartRoundedIcon className="shpnCart" /> Cart (
              {cartQuantity})
            </button> */}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
