import { useState } from "react";
import { client } from "client";

// add tweets is for getting new tweets when adding a new one
export function CreateSolution() {
  const [titleInput, setTitleInput] = useState("");
  const [solutionInput, setSolutionInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // data to send in the request body
    const data = {title: titleInput,
      content: solutionInput,
    };
 
    // make a request with 
    const solution = await client.post("/sol", data);
      };
  return (
    <form onSubmit={handleSubmit} className="solution">
      <div className="solution__input">
      <input
        id="title"
        value={titleInput}
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
      />
        <textarea
          value={solutionInput}
          onChange={(event) => setSolutionInput(event.target.value)}
        />
        <button type="submit">Create</button>
      </div>
    </form>
  );
}