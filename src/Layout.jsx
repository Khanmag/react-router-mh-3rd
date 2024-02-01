import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">home</Link>
        <Link to="/income">income</Link>
        <Link to="/expenses">expenses</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2024</footer>
    </>
  );
};

export default Layout;
