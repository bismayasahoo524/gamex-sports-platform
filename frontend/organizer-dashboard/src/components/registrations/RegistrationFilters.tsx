import type { RegistrationStatus } from "../../types/registration";

interface Props {
  status: RegistrationStatus | "ALL";
  onStatusChange: (
    status: RegistrationStatus | "ALL",
  ) => void;
}

export default function RegistrationFilters({
  status,
  onStatusChange,
}: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Status{" "}
        <select
          value={status}
          onChange={(event) =>
            onStatusChange(
              event.target.value as RegistrationStatus | "ALL",
            )
          }
        >
          <option value="ALL">All</option>
          <option value="PENDING">Pending</option>
          <option value="ELIGIBLE">Eligible</option>
          <option value="APPROVED">Approved</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="REJECTED">Rejected</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </label>
    </div>
  );
}