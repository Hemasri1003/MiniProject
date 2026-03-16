import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>

      <h2>University Marks Blockchain</h2>

      <Link to="/">Home</Link>

      <Link to="/college/login">
        College Login
      </Link>

      <Link to="/college/register">
        College Register
      </Link>

      <Link to="/university/login">
        University Login
      </Link>

    </nav>
  );

}

export default Navbar;