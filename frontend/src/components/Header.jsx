import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faSignInAlt,
  faSignOutAlt,
  faCaretDown,
  faPlus,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-[#4b0097] flex items-center space-x-2"
        >
          <span>Event Management</span>
        </Link>

        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <Link
                to="/create-event"
                className="flex items-center bg-[#093054] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#102144]"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Create Event
              </Link>
              <Link
                to="/my-events"
                className="flex items-center bg-[#093054] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#102144]"
              >
                <FontAwesomeIcon icon={faListAlt} className="mr-2" />
                My Events
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center bg-[#dc363c] text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center bg-transparent text-[#4b0097] hover:bg-[#4b0097] hover:text-white border border-gray-300 px-4 py-2 rounded-md font-semibold"
              >
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
              </Link>
              <Link
                to="/register"
                className="flex items-center bg-[#4b0097] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#4b0097]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;