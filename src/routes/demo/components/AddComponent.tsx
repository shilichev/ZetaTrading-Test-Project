import { Button, Divider, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { fetchAddBranch } from "../reducer/modal/thunks";
import { IModalContentProps } from "./DeleteComponent";
import classes from "./styles/modalContent.module.scss";

export const AddComponent = ({ id }: IModalContentProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, []);

  const handleValue = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      fetchAddBranch({ nodeName: event.target.add.value, parentNodeId: id })
    );
  };
  return (
    <div className={classes.modal_body}>
      <Typography>Add</Typography>
      <Divider />
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleValue}
          value={value}
          name="add"
          label="Node Name"
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
            <div className={classes.modal_button}>ADD</div>
          </Button>
        </div>
      </form>
    </div>
  );
};
