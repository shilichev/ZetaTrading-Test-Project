import Modal from "@mui/material/Modal";
import { ReactNode } from "react";
import { Card } from "@mui/material";
import { ITreeItem } from "../reducer/demo/slice";
import { AddComponent } from "./AddComponent";
import { DeleteComponent } from "./DeleteComponent";
import { RenameComponent } from "./RenameComponent";
import { ActionType } from "../../../common/types/modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 2,
};

interface IModalComponentProps extends Omit<ITreeItem, "children"> {
  handleCloseModal: () => void;
  isOpenModal: boolean;
  actionType: ActionType;
}

export default function ModalComponent({
  handleCloseModal,
  isOpenModal,
  actionType,
  id,
  name,
}: IModalComponentProps) {
  const switchModalChildren = (): ReactNode => {
    switch (actionType) {
      case ActionType.ADD:
        return <AddComponent id={id} name={name} />;
      case ActionType.DELETE:
      return <DeleteComponent id={id} name={name} />;
      case ActionType.RENAME:
        return <RenameComponent id={id} name={name} />;
      default:
        return <>Error</>;
    }
  };
  return (
    <Modal keepMounted open={isOpenModal} onClose={handleCloseModal}>
      <Card sx={style}>{switchModalChildren()}</Card>
    </Modal>
  );
}
