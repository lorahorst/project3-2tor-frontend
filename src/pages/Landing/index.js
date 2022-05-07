import { Login, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function Landing() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>2tor</h1>
      <h3>Keep Learning all Life Long.</h3>
      <Login />
      <Signup />
    </div>
  );
}
