import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ question, answer, itemId }) {
  const { openItemId, toggleItem } = useAccordionContext();
  const itemIsOpen = itemId === openItemId;

  function handleItemClick() {
    toggleItem(itemId);
  }

  return (
    <li className="accordion-item">
      <h2 className="accordion-item__question" onClick={handleItemClick}>
        {question} <img src={itemIsOpen ? minusIcon : plusIcon} alt="" />
      </h2>
      <div className={itemIsOpen ? "accordion-item__answer-open" : "accordion-item__answer-closed"}>
        {answer}
      </div>
    </li>
  );
}
