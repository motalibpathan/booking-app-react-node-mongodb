import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div>
      <div className="top">
        <span className="logo">React Admin</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>{" "}
          </li>
          <li>
            <span>Dashboard</span>{" "}
          </li>
          <li>
            <span>Dashboard</span>{" "}
          </li>
          <li>
            <span>Dashboard</span>{" "}
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
