import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  approveRegistration,
  cancelRegistration,
  createRegistration,
  getRegistration,
  getRegistrations,
  rejectRegistration,
} from "../../services/registrationApi";

import type {
  RegistrationCreateRequest,
} from "../../types/registration";

export const registrationKeys = {
  all: ["registrations"] as const,
  detail: (id: string) => ["registrations", id] as const,
};

export function useRegistrations() {
  return useQuery({
    queryKey: registrationKeys.all,
    queryFn: getRegistrations,
  });
}

export function useRegistration(id: string) {
  return useQuery({
    queryKey: registrationKeys.detail(id),
    queryFn: () => getRegistration(id),
    enabled: Boolean(id),
  });
}

export function useCreateRegistration() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegistrationCreateRequest) =>
      createRegistration(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: registrationKeys.all,
      });
    },
  });
}

export function useApproveRegistration() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: approveRegistration,

    onSuccess: (registration) => {
      queryClient.invalidateQueries({
        queryKey: registrationKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: registrationKeys.detail(registration.id),
      });
    },
  });
}

export function useRejectRegistration() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: rejectRegistration,

    onSuccess: (registration) => {
      queryClient.invalidateQueries({
        queryKey: registrationKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: registrationKeys.detail(registration.id),
      });
    },
  });
}

export function useCancelRegistration() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelRegistration,

    onSuccess: (registration) => {
      queryClient.invalidateQueries({
        queryKey: registrationKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: registrationKeys.detail(registration.id),
      });
    },
  });
}