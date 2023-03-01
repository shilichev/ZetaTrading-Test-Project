import {
  DashboardOutlined,
  DocumentScannerOutlined,
  TollOutlined,
} from "@mui/icons-material";
import { ListItemText, MenuItem, MenuList, Toolbar } from "@mui/material";

import classes from "../styles/sideBar.module.scss";
import logo from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesEnum } from "../types/routes";

export const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar className={classes.drawer__toolbar}>
        <img src={logo} alt="logo" />
        <div>
          <p className={classes.drawer__toolbar_title}>Daniil Shylichau</p>
          <p className={classes.drawer__toolbar_subtitle}>Test Task</p>
        </div>
      </Toolbar>
      <MenuList
        sx={{
          "& .Mui-selected": {
            color: "#2E7D32",
            fontWeight: '600'
          },
        }}
      >
        <MenuItem
          selected={RoutesEnum.DEMO === location.pathname}
          onClick={() => {
            navigate(RoutesEnum.DEMO);
          }}
        >
          <DashboardOutlined fontSize="small" color="action" />

          <ListItemText>Demo</ListItemText>
        </MenuItem>
        <MenuItem
          selected={RoutesEnum.DESCRIPTION === location.pathname}
          onClick={() => {
            navigate(RoutesEnum.DESCRIPTION);
          }}
        >
          <DocumentScannerOutlined fontSize="small" color="action" />

          <ListItemText>Description</ListItemText>
        </MenuItem>
        <MenuItem
          selected={RoutesEnum.API === location.pathname}
          onClick={() => {
            navigate(RoutesEnum.API);
          }}
        >
          <TollOutlined fontSize="small" color="action" />

          <ListItemText>API</ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );
};
