import { ArrowForwardIosSharp } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ITreeItem } from "../Demo";

interface IAccordionItemProps extends ITreeItem {
  index: number;
}

export const AccordionItem = ({
  id,
  children,
  name,
  index,
}: IAccordionItemProps) => {
  let padding = index * 20 + 20;
  return (
    <Accordion
      disableGutters
      key={id}
      TransitionProps={{ unmountOnExit: true }}
      sx={{
        "& .MuiAccordionDetails-root": {
          padding: 0,
        },
        "& .MuiAccordionSummary-root": {
          paddingLeft: `${padding}px`,
        },
        "& .MuiAccordionSummary-content": {
          marginLeft: "10px",
        },
      }}
    >
      <AccordionSummary
        sx={{
          flexDirection: "row-reverse",
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        }}
        aria-controls="panel1d-content"
        expandIcon={
          children && children.length !== 0 ? (
            <ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />
          ) : (
            <div style={{ width: "14px" }}></div>
          )
        }
        id="panel1d-header"
      >
        <p>{name}</p>
      </AccordionSummary>
      {children && children.length !== 0 && (
        <AccordionDetails>
          {children.map((item) => (
            <AccordionItem {...item} index={index + 1} />
          ))}
        </AccordionDetails>
      )}
    </Accordion>
  );
};
