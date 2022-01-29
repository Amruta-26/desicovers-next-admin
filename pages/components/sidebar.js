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
import Link from "next/link";

const drawerWidth = 300;

export default function Sidebar() {
    const productItems = [
        { name: "Add Product", link: "/add-product" },
        { name: "Show Product", link: "/demo" },
        { name: "Add Pincode", link: "/demo" },
        { name: "Tshirt Size", link: "/demo" },
        { name: "Bulk TshirtSize", link: "/demo" },
    ];

    const paymentItems = [
        { name: "Payment Recieve", link: "/demo" },
        { name: "Place Order", link: "/demo" },
        { name: "Cancel Order", link: "/demo" },
        { name: "Assign Money for Cancel Order", link: "/demo" },
        { name: "Customer Account", link: "/demo" },
        { name: "Wallet", link: "/demo" },
    ];

    const mobileItems = [
        { name: "Add Flip", link: "/demo" },
        { name: "Show Flip", link: "/demo" },
        { name: "Carousel", link: "/demo" },
        { name: "Home Page Image", link: "/demo" },
        { name: "Home Page Words", link: "/demo" },
        { name: "Home Page Image", link: "/demo" },
        { name: "Show Recent Arrival", link: "/demo" },
    ];

    const mobileCoversItems = [
        { name: "Enter Mobile Cover", link: "/demo" },
        { name: "Update Bulk Price", link: "/demo" },
        { name: "Update Bulk description", link: "/demo" },
        { name: "Review", link: "/demo" },
        { name: "Admin Heading", link: "/demo" },
    ];

    const dashboardContent = [
        productItems,
        paymentItems,
        mobileItems,
        mobileCoversItems,
    ];

    return (
        <Drawer
            sx={{
                width: "18%",
                height: "100%",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: "18%",
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

                <Divider sx={{ bgcolor: "#adadad" }} />
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ py: 1 }} primary="Dashboard" />
                </ListItemButton>
                <Divider sx={{ bgcolor: "#adadad" }} />
                <div className="fadeword">INTERFACE</div>
            </List>
            <Divider sx={{ bgcolor: "#adadad" }} />
            {dashboardContent.map((items, index) => (
                <div key={index}>
                    <CollapsibleCustomComponent
                        item={items}
                        title="some text"
                    />
                </div>
            ))}
        </Drawer>
    );
}

const CollapsibleCustomComponent = ({ item, title }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <ListItemButton onClick={() => setOpen(() => !open)}>
                <ListItemIcon>
                    <FolderIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary="Mobile Page" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <div className="dropdown">
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <div className="drop-fade">BASIC SERVICES:</div>
                    <List component="div" disablePadding>
                        {item.map((text, index) => (
                            <Link href={text.link}>
                                <ListItem sx={{ pl: 4 }} button key={text.name}>
                                    <ListItemText primary={text.name} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Collapse>
            </div>
        </>
    );
};