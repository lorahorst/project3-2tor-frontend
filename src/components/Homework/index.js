import { useState } from "react";
import { client } from "client"


export function Homework({ id, title, content, setHomeworks, homework }) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newHomeworkContent, setNewHomeworkContent] = useState(content);

  const handleDelete = () => {
    (async function () {
      // Endpoint for DELETING posts from the backend
      const url = `${process.env.REACT_APP_BACKEND_URL}/post/${id}`;
      // Request config that is going to hold the authorization
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      // make the request
      const result = await axios.delete(url, config);

      getPosts();
    })();
  };

  // handle the change of variable showAll
  const handleShowAll = () => {
    setShowAll((previousValue) => {
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
    setHomeworks((previousHomeworks) => {
      return previousHomeworks.map((homework) => {
        if (homework.id === id) {
          return {
            id: homework.id,
            content: newHomeworkContent,
          };
        } else {
          return homework;
        }
      });
    });
    handleCancel();
  };
  return (
      <div className="homework__input">
        <div className="username">{`${homework.user.firstName} ${homework.user.lastName}`}</div>
        <div>{`${homework.title}`}</div>
        {edit ? (
          <textarea
            value={newHomeworkContent}
            onChange={(event) => setNewHomeworkContent(event.target.value)}
          />
        ) : showAll ? (
          <p>{content}</p>
        ) : (
          <p>
            {content.length > 100 ? `${content.substring(0, 100)}...` : content}
          </p>
        )}

        {edit ? (
          <div className="homework__actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="homework__actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            {content.length > 100 && (
              <button onClick={handleShowAll}>
                {showAll ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        )}
      </div>
  );
}