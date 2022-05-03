import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "context";
import { useContext } from "react";

export function Navbar() {
  const { logout, user } = useContext(AuthContext);
  return (
    <nav>
      {user && <Link to="/home">Home</Link>}
      {user && <Link to="/create">CreateHomework</Link>}
      {user && <Link to="./hw">Homework</Link>}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}
