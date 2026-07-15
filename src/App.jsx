import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Courses from "./pages/Courses";
<<<<<<< HEAD
=======
import Grades from "./pages/Grades";
import Finance from "./pages/Finance";
>>>>>>> 76617c867399c2943a21c2976f6cfefd83a35057
import Settings from "./pages/Settings";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<Login setAuth={setIsAuthenticated} />} />
      </Routes>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="app-main">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/courses" element={<Courses />} />
<<<<<<< HEAD
=======
          <Route path="/grades" element={<Grades />} />
          <Route path="/finance" element={<Finance />} />
>>>>>>> 76617c867399c2943a21c2976f6cfefd83a35057
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
