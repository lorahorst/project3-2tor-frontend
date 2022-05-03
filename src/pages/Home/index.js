import { client } from "client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context";
import { ShowHomework, ShowSolution } from "../../components"
import styles from "./Home.module.css";

export function Home() {
  const { user } = useContext(AuthContext);
  const [homeworks, setHomeworks] = useState([]);
  const [solutions, setSolutions] = useState([]);

  const getHomeworks = async () => {
   
    // make the request
    const result = await client.get("/hw/owned");
    setHomeworks(result.data);
  };

  useEffect(() => {
    getHomeworks();
  }, []);

  const getSolutions = async () => {
   
    // make the request
    const result = await client.get("/sol/owned");
    setSolutions(result.data);
  };

  useEffect(() => {
    getSolutions();
  }, []);

  return (
    <div>
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <><h3>My Homework</h3>
      <ShowHomework homeworks={homeworks} setHomeworks={setHomeworks} /></>
      <><h3>My Solutions</h3>
      <ShowSolution solutions={solutions} setSolutions={setSolutions} /></>
    </div>
  );
}
