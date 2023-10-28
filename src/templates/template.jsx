import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
const Template = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/main">Main</Link>
          <Link to="/main/movements">Movements</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Template;
