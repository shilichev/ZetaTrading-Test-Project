import { ReactNode } from "react";
import { Layout } from "../../common/components/Layout";
import { AccordionItem } from "./components/Accordion";

const items: ITreeItem = {
  id: 1,
  name: "Root",
  children: [
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
    { id: 12, name: "Ro323ot" },
    { id: 13, name: "Ro3232ot" },
    { id: 14, name: "Ro3232ot" },
  ],
};

export interface ITreeItem {
  id: number;
  name: string;
  children?: ITreeItem[];
}

export const Demo = () => {
  return (
    <Layout>
      <AccordionItem {...items} index={0} />
    </Layout>
  );
};
