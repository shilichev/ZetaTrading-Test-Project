import { Add, DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { ActionType } from "../../../common/types/modal";
import { actions } from "../reducer/modal/slice";

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
  const dispatch = useDispatch();
  const handleOpenModal = (actionType: ActionType) => {
    dispatch(actions.onOpenModal({ actionType, id, name }));
  };

  return (
    <>
      {isOpen && (
        <Box
          className={classes.accordion__button_collection}
          sx={{
            display: { lg: "flex", md: "flex", xs: "none", sl: "none" },
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              handleOpenModal(ActionType.ADD);
            }}
          >
            <Add fontSize="small" />
            <Typography fontWeight="500">ADD NEW</Typography>
          </Button>
          {index !== 0 && (
            <Button
              color="info"
              variant="text"
              onClick={() => {
                handleOpenModal(ActionType.RENAME);
              }}
            >
              <EditOutlined fontSize="small" />
              <Typography fontWeight="500">RENAME</Typography>
            </Button>
          )}
          {index !== 0 && (
            <Button
              color="error"
              variant="text"
              onClick={() => {
                handleOpenModal(ActionType.DELETE);
              }}
            >
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
          <Button
            variant="contained"
            onClick={() => {
              handleOpenModal(ActionType.ADD);
            }}
          >
            <Add fontSize="small" />
          </Button>
          {index !== 0 && (
            <Button
              color="info"
              variant="text"
              onClick={() => {
                handleOpenModal(ActionType.RENAME);
              }}
            >
              <EditOutlined fontSize="small" />
            </Button>
          )}
          {index !== 0 && (
            <Button
              color="error"
              variant="text"
              onClick={() => {
                handleOpenModal(ActionType.DELETE);
              }}
            >
              <DeleteOutlineOutlined fontSize="small" />
            </Button>
          )}
        </Box>
      )}
    </>
  );
};
