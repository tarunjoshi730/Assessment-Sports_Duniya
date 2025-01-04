import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Authentication from "./components/Authentication";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

// Component to protect routes for authenticated users
const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

// Component to restrict access to admin-only features
const AdminRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Sync dark mode with the root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Show header only if the user is logged in */}
        <Header />
        <div className="p-4">
          <Routes>
            {/* Public routes */}
            <Route path="/auth" element={<Authentication />} />
            <Route path="/register" element={<Registration />} />

            {/* Protected routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

           
            {/* <Route
              path="/admin"
              element={
                <AdminRoute>
                  <div>Admin Panel Placeholder</div>
                </AdminRoute>
              }
            /> */}

            {/* Redirect unknown routes to login */}
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
