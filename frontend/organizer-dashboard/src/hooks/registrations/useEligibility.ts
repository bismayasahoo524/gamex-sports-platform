import { useMutation } from "@tanstack/react-query";

import { checkEligibility } from "../../services/registrationApi";

import type {
  EligibilityRequest,
} from "../../types/registration";

export function useEligibility() {
  return useMutation({
    mutationFn: (payload: EligibilityRequest) =>
      checkEligibility(payload),
  });
}