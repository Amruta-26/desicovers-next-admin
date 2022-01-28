import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderIcon from "@mui/icons-material/Folder";
import { indigo } from "@mui/material/colors";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 300;

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      sx={{
        width: '18%',
        height: "100%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: '18%',
          boxSizing: "border-box",
          bgcolor: indigo[400],
          color: "#fff",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <div className="logo-heading">
          <div className="logo">
            <TagFacesIcon sx={{ fontSize: 50 }} />
            &emsp;&emsp;
          </div>
          <div className="heading">
            DESICOVER
            <br />
            ADMIN<sup>2</sup>
          </div>
        </div>

        <Divider sx={{bgcolor: '#adadad'}}/>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#fff"}} />
          </ListItemIcon>
          <ListItemText sx={{py:1}} primary="Dashboard" />
        </ListItemButton>
        <Divider sx={{bgcolor: '#adadad'}}/>
        <div className="fadeword">INTERFACE</div>
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Product" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <div className="dropdown">
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="drop-fade">CUSTOM COMPONENTS:</div>
              <List component="div" disablePadding>
                {[
                  "Add Product",
                  "Show Product",
                  "Add Pincode",
                  "Tshirt Size",
                  "Bulk Tshirt Size",
                ].map((text, index) => (
                  <ListItem sx={{ pl: 4 }} button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <BuildIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Customer" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>


          <div className="dropdown">
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="drop-fade">CUSTOMER SERVICES:</div>
              <List component="div" disablePadding>
                {[
                  "Payment Recieve",
                  "Place Order",
                  "Cancel Order",
                  "Assign Money for Cancel Order",
                  "Customer Account",
                  "Wallet",
                ].map((text, index) => (
                  <ListItem sx={{ pl: 4 }} button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        </List>

        <Divider sx={{bgcolor: '#adadad'}}/>
        <div className="fadeword">ADDONS</div>
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <FolderIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Offer" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <div className="dropdown">
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="drop-fade">COUPON:</div>
              <List component="div" disablePadding>
                {["Add Coupon", "Show Coupons"].map((text, index) => (
                  <ListItem sx={{ pl: 4 }} button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <FolderIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Home Page" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <div className="dropdown">
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="drop-fade">BASIC SERVICES:</div>
              <List component="div" disablePadding>
                {[
                  "Add Flip",
                  "Show Flip",
                  "Carousel",
                  "Home Page Image",
                  "Home Page Words",
                  "Home Page Image",
                  "Show Recent Arrival",
                ].map((text, index) => (
                  <ListItem sx={{ pl: 4 }} button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <FolderIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Mobile Page" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <div className="dropdown">
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="drop-fade">MOBILE SERVICES:</div>
              <List component="div" disablePadding>
                {[
                  "Enter Mobile Cover",
                  "Update Bulk Price",
                  "Update Bulk description",
                  "Review",
                  "Admin Heading",
                ].map((text, index) => (
                  <ListItem sx={{ pl: 4 }} button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        </List>
      </List>
      <Divider sx={{bgcolor: '#adadad'}}/>
    </Drawer>
  );
}
