import { useNavigate, useParams } from "react-router-dom";

import {
  useApproveRegistration,
  useCancelRegistration,
  useRegistration,
  useRejectRegistration,
} from "../../hooks/registrations/useRegistrations";

import RegistrationStatusBadge from "../../components/registrations/RegistrationStatusBadge";

export default function RegistrationDetailsPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();

  const {
    data: registration,
    isLoading,
    isError,
  } = useRegistration(id);

  const approveMutation =
    useApproveRegistration();

  const rejectMutation =
    useRejectRegistration();

  const cancelMutation =
    useCancelRegistration();

  if (isLoading) {
    return <p>Loading registration...</p>;
  }

  if (isError || !registration) {
    return (
      <div>
        <h1>Registration Not Found</h1>
        <button onClick={() => navigate("/registrations")}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate("/registrations")}>
        ← Back to Registrations
      </button>

      <h1>Registration Details</h1>

      <p>
        <strong>ID:</strong> {registration.id}
      </p>

      <p>
        <strong>Event:</strong> {registration.event_id}
      </p>

      <p>
        <strong>Athlete:</strong>{" "}
        {registration.athlete_id}
      </p>

      <p>
        <strong>Team:</strong>{" "}
        {registration.team_id || "N/A"}
      </p>

      <p>
        <strong>Category:</strong>{" "}
        {registration.category}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <RegistrationStatusBadge
          status={registration.status}
        />
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            approveMutation.mutate(registration.id)
          }
          disabled={
            approveMutation.isPending ||
            registration.status === "APPROVED"
          }
        >
          Approve
        </button>

        <button
          onClick={() =>
            rejectMutation.mutate(registration.id)
          }
          disabled={rejectMutation.isPending}
        >
          Reject
        </button>

        <button
          onClick={() =>
            cancelMutation.mutate(registration.id)
          }
          disabled={cancelMutation.isPending}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}