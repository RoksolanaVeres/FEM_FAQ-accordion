import { useContext } from "react";
import { AccordionContext } from "../components/Accordion/Accordion";

export default function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion-related values should be used inside <Accordion> component");
  }

  return context;
}
