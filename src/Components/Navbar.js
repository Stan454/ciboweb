import {useState} from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


function Navbar() {

    const[openMenu, SetOpenMenu] = useState(false) //makes menu responsive
    const menuOptions = [
        {
          text: "Home",
          icon: <HomeIcon />,
        },
        {
          text: "About",
          icon: <InfoIcon />,
        },
        {
          text: "Testimonials",
          icon: <CommentRoundedIcon />,
        },
        {
          text: "Contact",
          icon: <PhoneRoundedIcon />,
        },
        {
          text: "Cart",
          icon: <ShoppingCartRoundedIcon />,
        },
      ];

  return (
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt=""/>
        </div>
        <div className="navbar-links-container">
        <ul>
            <a><Link to="/">Home</Link></a>
            <a><Link to="/restaurants">Restaurants</Link></a>
            <a><Link to="/account">Account</Link></a>
            <a><Link to="/cart"><BsCart2 className="navbar-cart-icon"/></Link></a>
        </ul>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => SetOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={() => SetOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => SetOpenMenu(false)}
          onKeyDown={() => SetOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar