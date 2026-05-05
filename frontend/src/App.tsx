import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MeditationsPage from "./pages/meditation/MeditationsPage";
import MeditationByIdPage from "./pages/meditation/MeditationByIdPage";
import SignUpPage from "./pages/user/SignUpPage";
import LoginPage from "./pages/user/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateMeditationSessionPage from "./pages/meditation-sessions/CreateMeditationSessionPage";
import MyMeditationSessionsPage from "./pages/meditation-sessions/MyMeditationSessionsPage";
import DashboardPage from "./pages/user/DashboardPage";
import MeditationSessionByIdPage from "./pages/meditation-sessions/MeditationSessionByIdPage";
import AboutUs from "./pages/AboutUs";
import SessionsWithMeditationPage from "./pages/meditation-sessions/SessionsWithMeditationPage";
import Footer from "./components/Footer";

function App() {
  

  return (
      <BrowserRouter>
      <Routes>


        {
        // login and signup
        }

        <Route path="/" element={<SignUpPage />} />

        <Route path="/login" element={<LoginPage /> }/>


        {
        // about
        }
        <Route path="/about-us" element={
          <ProtectedRoute>
          <AboutUs />
          </ProtectedRoute>
          }/>

        {
        // meditations
        }
        <Route path="/meditations" element={
          <ProtectedRoute>
          <MeditationsPage/>
          </ProtectedRoute>
        } />

        <Route path="/meditations/:id" element={
          <ProtectedRoute>
          <MeditationByIdPage />
          </ProtectedRoute>
        } />

        <Route path="/meditations/:id/sessions/new" element={
          <ProtectedRoute>
            <CreateMeditationSessionPage />
          </ProtectedRoute>
        }></Route>

        {
        // meditation sessions
        }

        <Route path="/meditation-sessions" element={
          <ProtectedRoute>
            <MyMeditationSessionsPage />
          </ProtectedRoute>
        }></Route>

        <Route path="/meditation-sessions/:id" element={
          <ProtectedRoute>
            <MeditationSessionByIdPage />
          </ProtectedRoute>
        }></Route>

        <Route path="/meditations/:id/sessions" element={
          <ProtectedRoute>
            <SessionsWithMeditationPage />
          </ProtectedRoute>
        }></Route>

        {
        // home page
        }
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }>
        </Route>

      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App
