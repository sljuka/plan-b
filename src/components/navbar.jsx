import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/onboard">onboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
