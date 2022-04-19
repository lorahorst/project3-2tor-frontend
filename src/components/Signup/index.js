import styles from "./Signup.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "context";

export function Signup() {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(firstName, lastName, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="firstName">First name:</label>
      <input
        id="firstName"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <label htmlFor="lastName">Last name:</label>
      <input
        id="lastName"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    <div className="radio">
      <label>
        <input type="radio" value="Student" checked={false} />
        Student
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Teacher" checked={false} />
        Teacher
      </label>
    </div>
      <button>Signup</button>
    </form>
  );
}
