import { useNavigate } from "react-router-dom";

import RegistrationForm from "../../components/registrations/RegistrationForm";

import { useCreateRegistration } from "../../hooks/registrations/useRegistrations";

export default function RegistrationCreatePage() {
  const navigate = useNavigate();

  const mutation = useCreateRegistration();

  return (
    <div>
      <h1>Create Registration</h1>

      <RegistrationForm
        loading={mutation.isPending}
        onSubmit={(payload) => {
          mutation.mutate(payload, {
            onSuccess: (registration) => {
              navigate(
                `/registrations/${registration.id}`,
              );
            },
          });
        }}
      />

      {mutation.isError && (
        <p>
          {mutation.error instanceof Error
            ? mutation.error.message
            : "Registration failed"}
        </p>
      )}
    </div>
  );
}