import { client } from "client";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { useNavigate } from "react-router-dom";
import { CreateHomework, ShowHomework } from "../../components";


export function Home() {
  const navigate = useNavigate();
  const [homeworks, setHomeworks] = useState([]);
  const [solutions, setSolutions] = useState([]);
  // Acquire the authorization context to get the user
  const { user } = useContext(AuthContext);

  // Function to acquire the posts from the backend
  const getHomeworks = async () => {

    // make the request
    const result = await client.get(`/hw/owned`);
    setHomeworks(result.data);
  };

  // Function to acquire the comments from the backend
  const getSolutions = async () => {
    // Endpoint for acquiring posts from the backend

    // make the request
    const result = await client.get(`/sol`);
    setSolutions(result.data);
  };

  // useEffect is used when doing API calls
  useEffect(() => {
    getHomeworks();
    getSolutions();
  }, []);

  !user && navigate("/login");
  return (
    <div>
      {user ? (
        <div>
          <CreateHomework getHomeworks={getHomeworks} setHomeworks={setHomeworks} />
          <ShowHomework
            homeworks={homeworks}
            setHomeworks={setHomeworks}
            getHomeworks={getHomeworks}
            getSolutions={getSolutions}
          />
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}