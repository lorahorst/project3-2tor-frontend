import "../../index.css"
import { Link } from "react-router-dom";
import { AuthContext } from "context";
import { useContext } from "react";

export function Navbar() {
  const { logout, user } = useContext(AuthContext);
  return (
    <nav>
      <ul className="nav-bar">
        <li>{user && <Link to="/home" className="link">Home</Link>}</li>
        <li>{user && <Link to="./hw" className="link">Homework</Link>}</li>
        <li>{user && <button onClick={logout}>Logout</button>}</li>
      </ul>
    </nav>
  );
}
