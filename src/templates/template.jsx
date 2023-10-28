import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <header>
        <nav>
          <a href="#">Main</a>
          <a href="#">Movements</a>
          <a href="#">Info</a>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Template;
