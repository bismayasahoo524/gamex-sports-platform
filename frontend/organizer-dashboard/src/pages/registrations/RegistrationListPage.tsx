import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import RegistrationFilters from "../../components/registrations/RegistrationFilters";
import RegistrationTable from "../../components/registrations/RegistrationTable";
import { useRegistrations } from "../../hooks/registrations/useRegistrations";

import type {
  RegistrationStatus,
} from "../../types/registration";

export default function RegistrationListPage() {
  const navigate = useNavigate();

  const [status, setStatus] =
    useState<RegistrationStatus | "ALL">("ALL");

  const {
    data: registrations = [],
    isLoading,
    isError,
    error,
  } = useRegistrations();

  const filteredRegistrations = useMemo(() => {
    if (status === "ALL") {
      return registrations;
    }

    return registrations.filter(
      (registration) =>
        registration.status === status,
    );
  }, [registrations, status]);

  if (isLoading) {
    return <p>Loading registrations...</p>;
  }

  if (isError) {
    return (
      <div>
        <h2>Registrations</h2>
        <p>
          Failed to load registrations.
        </p>
        <p>
          {error instanceof Error
            ? error.message
            : "Unknown error"}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1>Registrations</h1>

        <button
          onClick={() =>
            navigate("/registrations/create")
          }
        >
          Create Registration
        </button>
      </div>

      <RegistrationFilters
        status={status}
        onStatusChange={setStatus}
      />

      <RegistrationTable
        registrations={filteredRegistrations}
        onView={(id) =>
          navigate(`/registrations/${id}`)
        }
      />
    </div>
  );
}