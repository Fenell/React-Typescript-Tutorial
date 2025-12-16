import React, { useState } from "react";
import { NavLink } from "react-router";
import Button from "../../UI/Button";
import UpcommingSessions from "../Sessions/UpcommingSessions";

const MainHeader = () => {
  const [showUpcommingSession, setShowUpcommingSession] = useState(false);
  const handleCloseUpcomming = () => {
    setShowUpcommingSession(false);
  };

  return (
    <>
      {showUpcommingSession && (
        <UpcommingSessions onClose={handleCloseUpcomming} />
      )}
      <header id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Browser Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={() => setShowUpcommingSession(true)}>
                Upcoming Sessions
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
