import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Layout } from "../../common/components/Layout";
import ModalComponent from "./components/Modal";
import { AccordionItem } from "./components/Accordion";
import { fetchDemoTree } from "./reducer/demo/thunks";
import { actions } from "./reducer/modal/slice";

export const Demo = () => {
  const tree = useSelector((state: RootState) => state.treeSlice.tree);
  const modalState = useSelector((state: RootState) => state.treeSlice.modal);
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseModal = () => {
    dispatch(actions.onCloseModal());
  };

  useEffect(() => {
    dispatch(fetchDemoTree());
  }, [dispatch]);
  
  return (
    <Layout>
      <AccordionItem {...tree} index={0} />
      <ModalComponent handleCloseModal={handleCloseModal} {...modalState} />
    </Layout>
  );
};
