import "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "context";
import { useContext } from "react";
import { AiFillHome } from 'react-icons/ai';
import { FaUserInjured } from 'react-icons/fa';

export function Navbar() {
  const { logout, user } = useContext(AuthContext);
  return (
    <div className="nav_container">
    <nav className="nav-bar">
      {user && <Link to="/" className="link">Home<AiFillHome/></Link>}
      {!user && <Link to="/landing" className="link">Landing<FaUserInjured /></Link>}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
    </div>
  );
}
