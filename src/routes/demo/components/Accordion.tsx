import {
  Add,
  ArrowForwardIosSharp,
  DeleteOutlineOutlined,
  EditOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ClickAwayListener,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ITreeItem } from "../reducer/demo/slice";
import { ButtonContainer } from "./ButtonContainer";

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

  const [isOpen, setState] = useState(false);

  const handleState = () => {
    setState(true);
  };

  const handleState1 = (event: any) => {
    setState(false);
  };

  return (
    <Accordion
      disableGutters
      key={id}
      TransitionProps={{ unmountOnExit: true }}
      onClick={() => {
        handleState();
      }}
      sx={{
        "& .MuiAccordionDetails-root": {
          padding: 0,
        },
        "& .MuiAccordionSummary-root": {
          paddingLeft: `${padding}px`,
          "& .MuiTypography-root": { display: "flex", alignItems: "center" },
        },
        "& .MuiAccordionSummary-content": {
          marginLeft: "10px",
        },
      }}
    >
      <ClickAwayListener onClickAway={handleState1}>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              position: "relative",
              height: "40px",
            }}
          >
            <Typography
              sx={{
                overflowX: "hidden",
                maxWidth: "90%",
              }}
            >
              {name}
            </Typography>
            <ButtonContainer
              isOpen={isOpen}
              id={id}
              name={name}
              index={index}
            />
          </div>
        </AccordionSummary>
      </ClickAwayListener>
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
