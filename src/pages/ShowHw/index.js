import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context";
import { ShowHomework2 } from "components";

export function ShowHw() {
  const { user } = useContext(AuthContext);
  const [homeworks, setHomeworks] = useState([]);

  const getHomeworks = async () => {
   
    const url = `${process.env.REACT_APP_BACKEND_URL}/hw`;
  
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setHomeworks(result.data);
  };

  useEffect(() => {
    getHomeworks();
  }, []);

  return (
    <div>
      <h1>AllHomework</h1>
      <ShowHomework2 homeworks={homeworks} />
    </div>
  );
}

