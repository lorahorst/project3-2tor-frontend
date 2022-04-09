import { Login, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function Landing() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <code>{JSON.stringify(user)}</code>
      <Login />
      <Signup />
    </div>
  );
}
