import type { Registration } from "../../types/registration";
import RegistrationStatusBadge from "./RegistrationStatusBadge";

interface Props {
  registrations: Registration[];
  onView: (id: string) => void;
}

export default function RegistrationTable({
  registrations,
  onView,
}: Props) {
  if (registrations.length === 0) {
    return <p>No registrations found.</p>;
  }

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Athlete</th>
          <th>Event</th>
          <th>Category</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {registrations.map((registration) => (
          <tr key={registration.id}>
            <td>{registration.id}</td>
            <td>{registration.athlete_id}</td>
            <td>{registration.event_id}</td>
            <td>{registration.category}</td>
            <td>
              <RegistrationStatusBadge
                status={registration.status}
              />
            </td>
            <td>
              <button
                onClick={() => onView(registration.id)}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}