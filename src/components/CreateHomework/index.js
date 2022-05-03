import { useState } from "react";
import { client } from "client";

// add tweets is for getting new tweets when adding a new one
export function CreateHomework() {
  const [titleInput, setTitleInput] = useState("");
  const [homeworkInput, setHomeworkInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // data to send in the request body
    const data = {title: titleInput,
      content: homeworkInput,
    };
 
    // make a request with 
    const homework = await client.post("/hw", data);
      };
  return (
    <form onSubmit={handleSubmit} className="homework">
      <div className="homework__input">
      <input
        id="title"
        value={titleInput}
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
      />
        <textarea
          value={homeworkInput}
          onChange={(event) => setHomeworkInput(event.target.value)}
        />
        <button type="submit">Create</button>
      </div>
    </form>
  );
}