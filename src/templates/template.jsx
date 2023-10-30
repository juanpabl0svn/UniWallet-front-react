import { Outlet, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Template = () => {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("userData");
    window.location.reload();
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/main">Main</Link>
          <Link to="/main/movements">Movements</Link>
          <Link to="/main/points">Points</Link>
          <Link to="/main/loan">Loan</Link>
          <Link onClick={handleClick}>Log out</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Template;
