import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AccordionContext = createContext(null);

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion-related values should be used inside <Accordion> component");
  }

  return context;
}

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
