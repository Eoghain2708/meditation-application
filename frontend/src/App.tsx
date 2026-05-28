import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MeditationsPage from "./pages/meditation/MeditationsPage";
import MeditationByIdPage from "./pages/meditation/MeditationByIdPage";
import SignUpPage from "./pages/user/SignUpPage";
import LoginPage from "./pages/user/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateMeditationSessionPage from "./pages/meditation-sessions/CreateMeditationSessionPage";
import MyMeditationSessionsPage from "./pages/meditation-sessions/MyMeditationSessionsPage";
import DashboardPage from "./pages/user/DashboardPage";
import MyMeditationSessionByIdPage from "./pages/meditation-sessions/MyMeditationSessionByIdPage";
import AboutUs from "./pages/AboutUs";
import SessionsWithMeditationPage from "./pages/meditation-sessions/SessionsWithMeditationPage";
import Footer from "./components/elements/Footer";
import SessionWithMeditationIdPage from "./pages/meditation-sessions/SessionWIthMeditationIdPage";
import UserMeditationSessionsPage from "./pages/meditation-sessions/UserMeditationSessions";
import UserMeditationSessionByIdPage from "./pages/meditation-sessions/UserMeditationByIdPage";
import SearchPage from "./pages/user/SearchPage";
import { AuthProvider } from "./contexts/authProvider";
import EditInformationPage from "./pages/user/EditInformationPage";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-lvh flex flex-col">
        <BrowserRouter>
          <main className="flex-1">
            <Routes>
              {
                // login and signup
              }

              <Route path="/" element={<SignUpPage />} />

              <Route path="/login" element={<LoginPage />} />

              {
                // about
              }
              <Route
                path="/about-us"
                element={
                  <ProtectedRoute>
                    <AboutUs />
                  </ProtectedRoute>
                }
              />

              {
                // meditations
              }
              <Route
                path="/meditations"
                element={
                  <ProtectedRoute>
                    <MeditationsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/meditations/:id"
                element={
                  <ProtectedRoute>
                    <MeditationByIdPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/meditations/:id/sessions/new"
                element={
                  <ProtectedRoute>
                    <CreateMeditationSessionPage />
                  </ProtectedRoute>
                }
              ></Route>

              {
                // meditation sessions
              }

              <Route
                path="/meditation-sessions"
                element={
                  <ProtectedRoute>
                    <MyMeditationSessionsPage />
                  </ProtectedRoute>
                }
              ></Route>

              <Route
                path="/meditation-sessions/:id"
                element={
                  <ProtectedRoute>
                    <MyMeditationSessionByIdPage />
                  </ProtectedRoute>
                }
              ></Route>

              <Route
                path="/meditations/:id/sessions"
                element={
                  <ProtectedRoute>
                    <SessionsWithMeditationPage />
                  </ProtectedRoute>
                }
              ></Route>

              <Route
                path="/meditations/:meditationId/sessions/:id"
                element={
                  <ProtectedRoute>
                    <SessionWithMeditationIdPage />
                  </ProtectedRoute>
                }
              ></Route>

              <Route
                path="/users/:id"
                element={
                  <ProtectedRoute>
                    <UserMeditationSessionsPage />
                  </ProtectedRoute>
                }
              ></Route>

              <Route
                path="/users/:userId/sessions/:meditationId"
                element={
                  <ProtectedRoute>
                    <UserMeditationSessionByIdPage />
                  </ProtectedRoute>
                }
              ></Route>

              <Route
                path="/my-profile"
                element={
                  <ProtectedRoute>
                    <EditInformationPage />
                  </ProtectedRoute>
                }
              ></Route>

              {
                // home page
              }
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              ></Route>

              {
                // User search feature
              }
              <Route
                path="/users/search"
                element={
                  <ProtectedRoute>
                    <SearchPage />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
