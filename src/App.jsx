import starIcon from "./assets/images/icon-star.svg";
import Accordion from "./components/Accordion/Accordion";
import AccordionHeader from "./components/Accordion/AccordionHeader";

const FAQs = [
  {
    id: "question1",
    question: "What is Frontend Mentor, and how will it help me?",
    answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend 
    coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal 
    for portfolio building.`,
  },
  {
    id: "question2",
    question: "Is Frontend Mentor free?",
    answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing 
    access to a range of projects suitable for all skill levels.`,
  },
  {
    id: "question3",
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase 
    your skills to potential employers!`,
  },
  {
    id: "question4",
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you 
    can ask questions and seek support from other community members.`,
  },
];

export default function App() {
  return (
    <div className="app-container">
      <div className="app-container__top"></div>
      <main className="faq-container">
        <h1 className="faq-container__header">
          <img className="star-icon" src={starIcon} alt="" />
          FAQs
        </h1>
        <Accordion>
          {FAQs.map((faq) => (
            <Accordion.Item key={faq.id}>
              <AccordionHeader itemId={faq.id}>{faq.question}</AccordionHeader>
              <Accordion.Details itemId={faq.id}>{faq.answer}</Accordion.Details>
              <Accordion.Separator />
            </Accordion.Item>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
