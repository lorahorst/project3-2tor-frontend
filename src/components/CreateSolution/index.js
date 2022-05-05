import { client } from "client";
import { useContext, useState } from "react";
import { AuthContext } from "context";
import "../../index.css"


export function CreateSolution ({ id, individualHomework, setIndividualHomework }) {
  const [solutionContent, setSolutionContent] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async event => {
    event.preventDefault();
    // Data to send in the request body
    const data = {
      solutionContent: solutionContent,
    };
    // make a request with axios
    const solution = await client.post(`/sol/${id}`, data);
    const homeworkCopy = JSON.parse(JSON.stringify(individualHomework));
    homeworkCopy.solutions.push(solution.data);
    setIndividualHomework(homeworkCopy);
    setSolutionContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          value={solutionContent}
          onChange={event => setSolutionContent(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Create Solution</button>
      </div>
    </form>
  );
}