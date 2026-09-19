type Props = {
  currentStep: number;
};

const steps = [
  "Game",
  "Athlete",
  "Eligibility",
  "Review",
  "Complete",
];

export default function RegistrationStepper({
  currentStep,
}: Props) {
  return (
    <div className="gx-registration-stepper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        return (
          <div
            key={step}
            className={
              stepNumber <= currentStep
                ? "gx-step completed"
                : "gx-step"
            }
          >
            <div className="gx-step-number">
              {stepNumber < currentStep ? "✓" : stepNumber}
            </div>

            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
}