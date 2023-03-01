import { Button, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { fetchRenameBranch } from "../reducer/modal/thunks";
import { IModalContentProps } from "./DeleteComponent";
import classes from "./styles/modalContent.module.scss";

export const RenameComponent = ({ id, name }: IModalContentProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState(name);

  const handleValue = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      fetchRenameBranch({ newNodeName: event.target.rename.value, nodeId: id })
    );
  };
  return (
    <div className={classes.modal_body}>
      <Typography>Rename</Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleValue}
          value={value}
          name="rename"
          label="New Node Name"
          variant="outlined"
          fullWidth
          required
        />
        <div>
          <Button variant="contained" color="error">
            <div className={classes.modal_button}>CANCEL</div>
          </Button>
          <Button
            className={classes.modal_button}
            variant="contained"
            type="submit"
          >
            <div className={classes.modal_button}>Rename</div>
          </Button>
        </div>
      </form>
    </div>
  );
};
