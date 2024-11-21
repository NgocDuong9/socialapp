import "./App.css";
import TopBar from "./conponents/topbar";
import { UserProvider } from "./context/UserContext";
import { useUserData } from "./hooks/useUserData";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Message from "./pages/message";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/message" element={<Message />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
      </Router>
    </UserProvider>
  );
}

export default App;
