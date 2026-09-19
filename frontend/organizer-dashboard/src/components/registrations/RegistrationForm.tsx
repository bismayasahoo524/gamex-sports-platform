import { useState } from "react";

import type {
  RegistrationCreateRequest,
} from "../../types/registration";

interface Props {
  onSubmit: (
    payload: RegistrationCreateRequest,
  ) => void;

  loading?: boolean;
}

export default function RegistrationForm({
  onSubmit,
  loading = false,
}: Props) {
  const [eventId, setEventId] = useState("");
  const [athleteId, setAthleteId] = useState("");
  const [teamId, setTeamId] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    onSubmit({
      event_id: eventId,
      athlete_id: athleteId,
      team_id: teamId || undefined,
      category,
    });
  }

  return (
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

      <div>
        <label>Team ID</label>
        <input
          value={teamId}
          onChange={(event) =>
            setTeamId(event.target.value)
          }
        />
      </div>

      <div>
        <label>Category</label>
        <input
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Registration"}
      </button>
    </form>
  );
}