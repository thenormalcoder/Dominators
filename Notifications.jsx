import React from "react";
import "./Card.css";

const Notifications = ({ closeCard }) => {
  return (
    <div className="card notifications-card">
      <button className="close-btn" onClick={closeCard}>X</button>
      <h2>Notifications</h2>
      <div className="notifications-info">
        <ul>
          <li>Assignment 1 is due tomorrow</li>
          <li>Exam results are out</li>
          <li>Meeting with professor scheduled</li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
