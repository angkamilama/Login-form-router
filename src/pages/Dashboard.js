import style from "./Dashboard.modules.css";
import { useState } from "react";

function Dashboard({ user }) {
  return (
    <div className="logged-msg">
      {user ? (
        <h4>
          Congratulation !!! You have been logged in as{" "}
          <span className="user">{user}</span>
        </h4>
      ) : (
        " Sorry! You have not been logged in."
      )}
    </div>
  );
}

export default Dashboard;
