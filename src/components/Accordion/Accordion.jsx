import { useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionDetails from "./AccordionDetails";
import AccordionSeparator from "./AccordionSeparator";

export const AccordionContext = createContext(null);

export default function Accordion({ children }) {
  const [openItemId, setOpenItemId] = useState("question1");

  function toggleItem(itemId) {
    setOpenItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  }

  const accordionContextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={accordionContextValue}>
      <ul className="accordion">{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Details = AccordionDetails;
Accordion.Separator = AccordionSeparator;
