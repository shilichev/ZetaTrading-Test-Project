import { Button, Divider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { ITreeItem } from "../reducer/demo/slice";
import { fetchDeleteBranch } from "../reducer/modal/thunks";
import classes from "./styles/modalContent.module.scss";

export interface IModalContentProps extends Omit<ITreeItem, "children"> {}

export const DeleteComponent = ({ id, name }: IModalContentProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(fetchDeleteBranch({ nodeId: id }));
  };
  return (
    <div className={classes.modal_body}>
      <Typography>Delete</Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Typography>Do you want to delete {name}?</Typography>
        <div>
          <Button variant="contained" color="error">
            <div className={classes.modal_button}>CANCEL</div>
          </Button>
          <Button
            className={classes.modal_button}
            variant="contained"
            type="submit"
          >
            <div className={classes.modal_button}>DELETE</div>
          </Button>
        </div>
      </form>
    </div>
  );
};
