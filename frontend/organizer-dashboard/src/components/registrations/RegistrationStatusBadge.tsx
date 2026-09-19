import type { RegistrationStatus } from "../../types/registration";

interface Props {
  status: RegistrationStatus;
}

export default function RegistrationStatusBadge({
  status,
}: Props) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        background: "#f3f4f6",
      }}
    >
      {status}
    </span>
  );
}