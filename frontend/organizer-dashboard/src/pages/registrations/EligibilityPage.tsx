import { useState } from "react";

import EligibilityResult from "../../components/registrations/EligibilityResult";
import { useEligibility } from "../../hooks/registrations/useEligibility";

export default function EligibilityPage() {
  const [eventId, setEventId] = useState("");
  const [athleteId, setAthleteId] = useState("");

  const mutation = useEligibility();

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    mutation.mutate({
      event_id: eventId,
      athlete_id: athleteId,
    });
  }

  return (
    <div>
      <h1>Eligibility Check</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Event ID</label>

          <input
            value={eventId}
            onChange={(event) =>
              setEventId(event.target.value)
            }
            required
          />
        </div>

        <div>
          <label>Athlete ID</label>

          <input
            value={athleteId}
            onChange={(event) =>
              setAthleteId(event.target.value)
            }
            required
          />
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
        >
          {mutation.isPending
            ? "Checking..."
            : "Check Eligibility"}
        </button>
      </form>

      {mutation.isError && (
        <p>
          {mutation.error instanceof Error
            ? mutation.error.message
            : "Eligibility check failed"}
        </p>
      )}

      <EligibilityResult result={mutation.data} />
    </div>
  );
}