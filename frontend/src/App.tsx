import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MeditationsPage from "./pages/MeditationsPage";
import MeditationByIdPage from "./pages/MeditationByIdPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateMeditationSessionPage from "./pages/CreateMeditationSessionPage";
import MyMeditationSessionsPage from "./pages/MyMeditationSessionsPage";

function App() {
  

  return (
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<SignUpPage />} />

        <Route path="/login" element={<LoginPage /> }/>

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

        <Route path="/meditation-sessions" element={
          <ProtectedRoute>
            <MyMeditationSessionsPage />
          </ProtectedRoute>
        }></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
