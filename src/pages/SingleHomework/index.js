import { client } from "client";
import { CreateSolution, ShowSolution } from "../../components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../index.css"

export function SingleHomework({ setSolutions, getSolutions }) {
  const [individualHomework, setIndividualHomework] = useState();
  const { id } = useParams();
  const fetchHomework = async () => {
    const response = await client.get(`/hw/${id}`);
    setIndividualHomework(response.data);
  };
  const updateSolution = (firstName, solution) => {
    let updatedHomework = JSON.parse(JSON.stringify(individualHomework));
    let newSolution = {
      solutionContent: solution,
      user: firstName,
    };
    updatedHomework.solutions.push(newSolution);
    setIndividualHomework(updatedHomework);
  };
  const deleteSolution = id => {
    let updatedHomework = JSON.parse(JSON.stringify(individualHomework));
    let filteredSolutions = updatedHomework.solutions.filter(individualSolution => {
      return individualSolution._id !== id;
    });
    updatedHomework.solutions = filteredSolutions;
    setIndividualHomework(updatedHomework);
  };
  useEffect(() => {
    id && fetchHomework();
  }, [id]);
  return (
    <div>
      {individualHomework && (
        <div>
            <div className="single-Homework">
            <h3>{individualHomework.title}</h3>
              <p>{individualHomework.content}</p>
            </div>
          <CreateSolution
            id={id}
            individualHomework={individualHomework}
            setIndividualHomework={setIndividualHomework}
            getSolutions={getSolutions}
            setSolutions={setSolutions}
            updateSolution={updateSolution}
          />
          <ShowSolution
            solutions={individualHomework.solutions}
            setSolutions={setSolutions}
            fetchHomework={fetchHomework}
            deleteSolution={deleteSolution}
          />
        </div>
      )}
    </div>
  );
}