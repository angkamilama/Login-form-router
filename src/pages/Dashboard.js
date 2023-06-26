import style from "./Dashboard.modules.css";

function Dashboard({ user }) {
  console.log(user);
  return (
    <div className="logged-msg">
      <h4>
        Congratulation !!! You have been logged in as{" "}
        <span className="user">{user}</span>
      </h4>
    </div>
  );
}

export default Dashboard;
