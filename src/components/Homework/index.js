import { useState } from "react";
import { client } from "client";
import { useNavigate } from "react-router-dom";
import "../../index.css";


// Receive the id, the content and the setPost function.
export function Homework({
  id,
  title,
  content,
  getSolutions,
  setHomeworks,
  homework,
  getHomeworks,
  createdAt,
}) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newHomeworkTitle, setNewHomeworkTitle] = useState(title);
  const [newHomeworkContent, setNewHomeworkContent] = useState(content);
  const navigate = useNavigate();

  const handleShowSolution = () => {
    return navigate(`/hw/${id}`);
  };

  // handle Post deletion
  const handleDelete = () => {
    (async function () {

      // make the request
      const result = await client.delete(`/hw/${id}`);

      getHomeworks();
    })();
  };

  // handle the change of variable showAll
  const handleShowAll = () => {
    setShowAll(previousValue => {
      return !previousValue;
    });
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const handleSave = () => {
    // Function to EDIT the posts from the backend
    (async function () {

      // make the request
      const result = await client.put(
        `/hw/${id}`,
        {
          title: newHomeworkTitle,
          content: newHomeworkContent,
        },
      );
      getHomeworks();
    })();

    handleCancel();
  };

  return (
    <div className="homework">
      <div>
        <p className="date">{createdAt.toString().split('T')[0]}</p>
        </div>


          {edit ? (
            <input
              value={newHomeworkTitle}
              onChange={event => setNewHomeworkTitle(event.target.value)}
            />
          ) : (
            <p className="title">{title}</p>
          )}

          {edit ? (
            <textarea 
              value={newHomeworkContent}
              onChange={event => setNewHomeworkContent(event.target.value)}
            />
          ) : showAll ? (
            <p className="content">{content}</p>
          ) : (
            <p className="my-2">
              {content.length > 100
                ? `${content.substring(0, 100)}...`
                : content}
            </p>
          )}

          {edit ? (
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
            
          ) : (
            
            <div>
              {content.length > 100 && (
                <button className="text-stone-600 font-semibold pt-5 underline underline-offset-1	o" onClick={handleShowAll}>
                  {showAll ? "Read less" : "Read more"}
                </button>
              )}
              <button className=" bg-gray-100 rounded-lg  text-stone-700 text-2xl p-2" onClick={handleShowSolution}>Go to...</button>
              <button className=" bg-gray-100 rounded-lg p-2 min-w-fit " onClick={handleEdit}>Edit</button>
              <button className=" bg-gray-100 rounded-lg p-2"  onClick={handleDelete}>Delete</button>
            </div>
          )}
          </div>
  );}
