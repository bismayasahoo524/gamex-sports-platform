export type RegistrationStatus =
  | "PENDING"
  | "ELIGIBLE"
  | "APPROVED"
  | "CONFIRMED"
  | "REJECTED"
  | "CANCELLED";

export type EligibilityStatus =
  | "ELIGIBLE"
  | "NOT_ELIGIBLE"
  | "PENDING";

export interface Registration {
  id: string;
  tenant_id: string;
  event_id: string;
  athlete_id: string;
  team_id?: string | null;
  category: string;
  status: RegistrationStatus;
  registered_at: string;
  approved_at?: string | null;
  created_at: string;
}

export interface RegistrationCreateRequest {
  event_id: string;
  athlete_id: string;
  team_id?: string;
  category: string;
}

export interface RegistrationUpdateRequest {
  team_id?: string;
  category?: string;
  status?: RegistrationStatus;
}

export interface EligibilityRequest {
  event_id: string;
  athlete_id: string;
}

export interface EligibilityResult {
  athlete_id: string;
  event_id: string;
  status: EligibilityStatus;
  eligible: boolean;
  reason?: string;
  checked_at?: string;
}