"use client";
import { StepsProps } from "@/slices/Steps";
import Button from "@/app/components/Button";
import { sendGTMEvent } from "@next/third-parties/google";
import "./styles.scss";

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
      <Button
        onClick={() =>
          sendGTMEvent({
            event: "subscribeClick",
            value: { location: "steps" },
          })
        }
        size="large"
      >
        PARTICIPE
      </Button>
    </section>
  );
}

