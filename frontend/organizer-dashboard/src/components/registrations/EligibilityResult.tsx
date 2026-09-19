import type {
  EligibilityResult as EligibilityResultType,
} from "../../types/registration";

interface Props {
  result?: EligibilityResultType;
}

export default function EligibilityResult({
  result,
}: Props) {
  if (!result) {
    return null;
  }

  return (
    <div>
      <h3>Eligibility Result</h3>

      <p>
        Status: <strong>{result.status}</strong>
      </p>

      <p>
        Eligible:{" "}
        <strong>
          {result.eligible ? "Yes" : "No"}
        </strong>
      </p>

      {result.reason && (
        <p>Reason: {result.reason}</p>
      )}
    </div>
  );
}