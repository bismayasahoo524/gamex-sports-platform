import type { ReactNode } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Login from "../pages/auth/Login";

import HomePage from "../pages/public/HomePage";
import GamesPage from "../pages/public/GamesPage";
import EventDetailsPage from "../pages/public/EventDetailsPage";
import MyRegistrationsPage from "../pages/public/MyRegistrationsPage";
import RegistrationDetailsPage from "../pages/public/RegistrationDetailsPage";

import RegistrationGamePage from "../pages/registration/RegistrationGamePage";
import RegistrationAthletePage from "../pages/registration/RegistrationAthletePage";
import RegistrationEligibilityPage from "../pages/registration/RegistrationEligibilityPage";
import RegistrationReviewPage from "../pages/registration/RegistrationReviewPage";
import RegistrationSuccessPage from "../pages/registration/RegistrationSuccessPage";

import Dashboard from "../pages/dashboard/Dashboard";
import Events from "../pages/events/Events";
import CreateEvent from "../pages/events/CreateEvent";

import RegistrationListPage from "../pages/registrations/RegistrationListPage";

function ProtectedRoute({
  children,
}: {
  children: ReactNode;
}) {
  const isAuthenticated =
    localStorage.getItem("gamex_authenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />

        <Route path="/games" element={<GamesPage />} />

        <Route
          path="/events"
          element={<GamesPage />}
        />

        <Route
          path="/events/:eventId"
          element={<EventDetailsPage />}
        />

        {/* REGISTRATION */}
        <Route
          path="/events/:eventId/register"
          element={<RegistrationGamePage />}
        />

        <Route
          path="/events/:eventId/register/athlete"
          element={<RegistrationAthletePage />}
        />

        <Route
          path="/events/:eventId/register/eligibility"
          element={<RegistrationEligibilityPage />}
        />

        <Route
          path="/events/:eventId/register/review"
          element={<RegistrationReviewPage />}
        />

        <Route
          path="/events/:eventId/register/success"
          element={<RegistrationSuccessPage />}
        />

        {/* ATHLETE */}
        <Route
          path="/my-registrations"
          element={<MyRegistrationsPage />}
        />

        <Route
          path="/my-registrations/:registrationId"
          element={<RegistrationDetailsPage />}
        />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />

        {/* ORGANIZER */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/events/create"
          element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/organizer/events"
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />

        <Route
          path="/organizer/registrations"
          element={
            <ProtectedRoute>
              <RegistrationListPage />
            </ProtectedRoute>
          }
        />

        {/* TEMPORARY */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}