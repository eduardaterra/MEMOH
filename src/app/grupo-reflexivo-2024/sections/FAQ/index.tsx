import { FaqProps } from "@/slices/Faq";
import "./styles.scss";
import Accordion from "./Accordion";

export default function FAQ({ slice }: FaqProps) {
  return (
    <section id="faq" className=" faq faq--container">
      <div className="faq--content">
        <div className="faq--title">
          <h3>FAQ</h3>
        </div>
        <div className="faq--questions-container">
          {slice.primary.questions.map((question, i) => (
            <Accordion
              key={i}
              title={question.question as string}
              content={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

