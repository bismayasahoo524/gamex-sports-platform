import type { RouteObject } from "react-router-dom";

import RegistrationListPage from "../pages/registrations/RegistrationListPage";
import RegistrationCreatePage from "../pages/registrations/RegistrationCreatePage";
import RegistrationDetailsPage from "../pages/registrations/RegistrationDetailsPage";
import EligibilityPage from "../pages/registrations/EligibilityPage";

export const registrationRoutes: RouteObject[] = [
  {
    path: "/registrations",
    element: <RegistrationListPage />,
  },
  {
    path: "/registrations/create",
    element: <RegistrationCreatePage />,
  },
  {
    path: "/registrations/:id",
    element: <RegistrationDetailsPage />,
  },
  {
    path: "/registrations/eligibility",
    element: <EligibilityPage />,
  },
];