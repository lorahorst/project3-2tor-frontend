import { client } from "client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context";
import { ShowHomework } from "components";

export function ShowHw() {
  const { user } = useContext(AuthContext);
  const [homeworks, setHomeworks] = useState([]);

  const getHomeworks = async () => {
   
    // make the request
    const result = await client.get("/hw");
    setHomeworks(result.data);
  };

  useEffect(() => {
    getHomeworks();
  }, []);

  return (
    <div>
      <h1>All Homework</h1>
      <ShowHomework homeworks={homeworks} />
    </div>
  );
}

