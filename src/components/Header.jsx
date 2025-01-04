import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { FiMoon, FiSun } from "react-icons/fi"; 
import { toggleDarkMode } from "../features/themeSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut(); // Sign out from Firebase
    dispatch(logout());
    navigate("/auth");
  };

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  if (!user) return null; // Don't show header if the user is not logged in

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center flex-col sm:flex-row">
      <h1 className="text-xl font-bold mb-2 sm:mb-0 text-black dark:text-white">Dashboard</h1>
      <div className="flex items-center gap-4">
        <p className="text-sm sm:text-base text-black dark:text-white">{user.email}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded text-sm sm:text-base"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          onClick={toggleTheme}
          className="text-black dark:text-white bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
        >
          {darkMode ? (
            <FiSun className="text-yellow-500" />
          ) : (
            <FiMoon className="text-gray-800" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

