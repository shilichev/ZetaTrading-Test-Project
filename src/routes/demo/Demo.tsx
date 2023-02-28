import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Layout } from "../../common/components/Layout";
import { AccordionItem } from "./components/Accordion";
import { ITreeItem } from "./reducer/demo/slice";
import { fetchDemoTree } from "./reducer/demo/thunks";

const items: ITreeItem = {
  id: 1,
  name: "Root",
  children: [
    { id: 12, name: "Ro323ot" },
    { id: 13, name: "Ro3232ot" },
    {
      id: 11,
      name: "12121",
      children: [
        {
          id: 122,
          name: "Ro323ddwdwot",
          children: [
            { id: 122, name: "Ro323ddwdwot" },
            { id: 132, name: "Ro323dwdwdwdwd2ot" },
            { id: 142, name: "Ro323dwdwdwdwdwd2ot" },
          ],
        },
        { id: 132, name: "Ro323dwdwdwdwd2ot" },
        { id: 142, name: "Ro323dwdwdwdwdwd2ot" },
      ],
    },
    { id: 14, name: "Ro3232ot" },
  ],
};

export const Demo = () => {
  const tree = useSelector((state: RootState) => state.treeSlice.tree);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchDemoTree());
  }, []);
  return (
    <Layout>
      <AccordionItem {...items} index={0} />
    </Layout>
  );
};
