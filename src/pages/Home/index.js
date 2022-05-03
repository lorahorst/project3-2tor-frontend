import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context";
import { ShowHomework, ShowSolution } from "../../components"
import styles from "./Home.module.css";

export function Home() {
  const { user } = useContext(AuthContext);
  const [homeworks, setHomeworks] = useState([]);
  const [solutions, setSolutions] = useState([]);

  const getHomeworks = async () => {
   
    const url = `${process.env.REACT_APP_BACKEND_URL}/hw/owned`;
  
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

  const getSolutions = async () => {
   
    const url = `${process.env.REACT_APP_BACKEND_URL}/sol/owned`;
  
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setSolutions(result.data);
  };

  useEffect(() => {
    getSolutions();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <><h3>My Homework</h3>
      <ShowHomework homeworks={homeworks} setHomeworks={setHomeworks} /></>
      <><h3>My Solutions</h3>
      <ShowSolution solutions={solutions} setSolutions={setSolutions} /></>
    </div>
  );
}
