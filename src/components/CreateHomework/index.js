import { useState } from "react";
import axios from "axios";

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
    // url of the endpoint for homework
    const url = `${process.env.REACT_APP_BACKEND_URL}/hw`;
    // reqest configuration for adding a header with authorization
    const config = {
      headers: {
        // read token from local storage and send it with request
        authorization: localStorage.getItem("token"),
      },
    };
    // make a request with axios
    const homework = await axios.post(url, data, config);
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