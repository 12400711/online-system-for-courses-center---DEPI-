import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

function App() {
  // controls the mobile sidebar drawer
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="app-main">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <Routes>
          <Route path="/" element={<Navigate to="/students" />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
