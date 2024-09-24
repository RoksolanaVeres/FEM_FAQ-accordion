import useAccordionContext from "../../hooks/useAccordionContext";

export default function AccordionDetails({ children, itemId }) {
  const { openItemId } = useAccordionContext();

  const itemIsOpen = itemId === openItemId;
  return (
    <div className={itemIsOpen ? "accordion-item__answer-open" : "accordion-item__answer-closed"}>
      {children}
    </div>
  );
}
