import { useState } from "react";
import { client } from "client";
import "../../index.css"

// Add posts is for getting new posts when adding a new one
export function CreateHomework({ getHomeworks }) {
  const [homeworkTitle, setHomeworkTitle] = useState("");
  const [homeworkContent, setHomeworkContent] = useState("");


  const handleSubmit = async event => {
    event.preventDefault();
    // Data to send in the request body
    const data = {
      title: homeworkTitle,
      content: homeworkContent,
    };

    const homework = await client.post("/hw", data);
    // get posts from the backend
    getHomeworks();
    setHomeworkTitle("");
    setHomeworkContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="create-form">
        <input className="border-2 p-2 rounded-lg mb-5"
          placeholder="Homework title"
          value={homeworkTitle}
          onChange={event => setHomeworkTitle(event.target.value)}
        />
        <textarea className="border-2 p-2 rounded-lg mb-5"
          placeholder="Insert Task or Question"
          value={homeworkContent}
          onChange={event => setHomeworkContent(event.target.value)}
        />
        <button className="p-2 rounded-xl bg-emerald-400 w-60 text-white font-bold" type="submit">Create Post</button>
      </div>
    </form>
  );
}