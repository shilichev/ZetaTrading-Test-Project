import {
  DashboardOutlined,
  DocumentScannerOutlined,
  TollOutlined,
} from "@mui/icons-material";
import { ListItemText, MenuItem, MenuList, Toolbar } from "@mui/material";

import classes from "./styles/sideBar.module.scss";
import logo from "../assets/logo.png";

export const SideBar = () => {
  return (
    <div>
      <Toolbar className={classes.drawer__toolbar}>
        <img src={logo} alt="logo" />
        <div>
          <p className={classes.drawer__toolbar_title}>Daniil Shylichau</p>
          <p className={classes.drawer__toolbar_subtitle}>Test Task</p>
        </div>
      </Toolbar>
      <MenuList>
        <MenuItem>
          <DashboardOutlined fontSize="small" color="primary" />

          <ListItemText>Demo</ListItemText>
        </MenuItem>
        <MenuItem>
          <DocumentScannerOutlined fontSize="small" color="primary" />

          <ListItemText>Description</ListItemText>
        </MenuItem>
        <MenuItem>
          <TollOutlined fontSize="small" color="primary" />

          <ListItemText>API</ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );
};
