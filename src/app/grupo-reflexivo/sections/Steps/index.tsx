import { StepsProps } from "@/slices/Steps";
import "./styles.scss";
import Button from "@/app/components/Button";

export default function Steps({ slice }: StepsProps) {
  return (
    <section className="steps steps--container">
      <div className="steps--content">
        <h3>ETAPAS</h3>
        <div className="steps--items-container">
          {slice.primary.steps.map((step, index) => (
            <div className="steps--item" key={step.title}>
              <p>
                <strong>
                  <em>{index + 1}_</em>
                  {step.title}{" "}
                </strong>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Button size="large">PARTICIPE</Button>
    </section>
  );
}

