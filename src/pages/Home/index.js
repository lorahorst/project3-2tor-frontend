import { client } from "client";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { useNavigate } from "react-router-dom";
import { CreateHomework, ShowHomework, CreateSolution, ShowSolution } from "../../components";
import "../../index.css"


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
    const result = await client.get(`/sol/owned`);
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
          <h1>Create Homework</h1>
          <CreateHomework getHomeworks={getHomeworks} setHomeworks={setHomeworks} />
          <h1>My Homework</h1>
          <ShowHomework
            homeworks={homeworks}
            setHomeworks={setHomeworks}
            getHomeworks={getHomeworks}
            getSolutions={getSolutions}
          />
          <ShowSolution
            solutions={solutions}
            setSolutions={setSolutions}
            getSolutions={getSolutions}
            getHomeworks={getHomeworks}
          />
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}