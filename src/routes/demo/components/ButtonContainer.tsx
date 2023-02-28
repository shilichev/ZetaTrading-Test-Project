import { Add, DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import classes from "./styles/accordion.module.scss";

interface IButtonContainerProps {
  isOpen: boolean;
  id: number;
  name: string;
  index: number;
}

export const ButtonContainer = ({
  isOpen,
  id,
  name,
  index,
}: IButtonContainerProps) => {
  return (
    <>
      {isOpen && (
        <Box
          className={classes.accordion__button_collection}
          sx={{
            display: { lg: "flex", md: "flex", xs: "none", sl: "none" },
          }}
        >
          <Button variant="contained">
            <Add fontSize="small" />

            <Typography fontWeight="500">ADD NEW</Typography>
          </Button>
          {index !== 0 && (
            <Button color="info" variant="text">
              <EditOutlined fontSize="small" />
              <Typography fontWeight="500">RENAME</Typography>
            </Button>
          )}
          {index !== 0 && (
            <Button color="error" variant="text">
              <DeleteOutlineOutlined fontSize="small" />
              <Typography fontWeight="500"> DELETE</Typography>
            </Button>
          )}
        </Box>
      )}
      {isOpen && (
        <Box
          className={classes.accordion__button_collection}
          sx={{
            display: { lg: "none", md: "none", xs: "block", sl: "block" },
            position: "absolute",
            right: 0,

            top: "50%",
            transform: "translate(0, -50%)",
            "& button": {
              margin: 0,
            },
          }}
        >
          <Button variant="contained">
            <Add fontSize="small" />
          </Button>
          {index !== 0 && (
            <Button color="info" variant="text">
              <EditOutlined fontSize="small" />
            </Button>
          )}
          {index !== 0 && (
            <Button color="error" variant="text">
              <DeleteOutlineOutlined fontSize="small" />
            </Button>
          )}
        </Box>
      )}
    </>
  );
};
