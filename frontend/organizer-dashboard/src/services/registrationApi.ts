import type {
  EligibilityRequest,
  EligibilityResult,
  Registration,
  RegistrationCreateRequest,
  RegistrationUpdateRequest,
} from "../types/registration";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const message = await response.text();

    throw new Error(
      message || `Request failed with status ${response.status}`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}

export async function getRegistrations(): Promise<Registration[]> {
  return request<Registration[]>("/v1/registrations");
}

export async function getRegistration(
  registrationId: string,
): Promise<Registration> {
  return request<Registration>(
    `/v1/registrations/${registrationId}`,
  );
}

export async function createRegistration(
  payload: RegistrationCreateRequest,
): Promise<Registration> {
  return request<Registration>("/v1/registrations", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateRegistration(
  registrationId: string,
  payload: RegistrationUpdateRequest,
): Promise<Registration> {
  return request<Registration>(
    `/v1/registrations/${registrationId}`,
    {
      method: "PATCH",
      body: JSON.stringify(payload),
    },
  );
}

export async function approveRegistration(
  registrationId: string,
): Promise<Registration> {
  return request<Registration>(
    `/v1/registrations/${registrationId}/approve`,
    {
      method: "POST",
    },
  );
}

export async function rejectRegistration(
  registrationId: string,
): Promise<Registration> {
  return request<Registration>(
    `/v1/registrations/${registrationId}/reject`,
    {
      method: "POST",
    },
  );
}

export async function cancelRegistration(
  registrationId: string,
): Promise<Registration> {
  return request<Registration>(
    `/v1/registrations/${registrationId}/cancel`,
    {
      method: "POST",
    },
  );
}

export async function checkEligibility(
  payload: EligibilityRequest,
): Promise<EligibilityResult> {
  return request<EligibilityResult>("/v1/eligibility/check", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}