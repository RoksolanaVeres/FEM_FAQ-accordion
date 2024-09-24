import plusIcon from "@/assets/images/icon-plus.svg";
import minusIcon from "@/assets/images/icon-minus.svg";
import useAccordionContext from "../../hooks/useAccordionContext";

export default function AccordionHeader({ itemId, children }) {
  const { toggleItem, openItemId } = useAccordionContext();
  const itemIsOpen = itemId === openItemId;

  function handleItemClick() {
    toggleItem(itemId);
  }

  return (
    <h2 className="accordion-item__question" onClick={handleItemClick}>
      {children} <img src={itemIsOpen ? minusIcon : plusIcon} alt="" />
    </h2>
  );
}
