import { useState } from "react";


export function Solution({ id, content, setSolutions, solution }) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newSolutionContent, setNewSolutionContent] = useState(content);

  const handleDelete = () => {
    setSolutions((previousSolutions) => {
   
      return previousSolutions.filter((solution) => {
   
        return solution.id !== id;
      });
    });
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
    setSolutions((previousSolutions) => {
      return previousSolutions.map((solution) => {
        if (solution.id === id) {
          return {
            id: solution.id,
            content: newSolutionContent,
          };
        } else {
          return solution;
        }
      });
    });
    handleCancel();
  };
  return (
      <div className="solution__input">
        <div className="username">{`${solution.user.firstName} ${solution.user.lastName}`}</div>
        {edit ? (
          <textarea
            value={newSolutionContent}
            onChange={(event) => setNewSolutionContent(event.target.value)}
          />
        ) : showAll ? (
          <p>{content}</p>
        ) : (
          <p>
            {content.length > 100 ? `${content.substring(0, 100)}...` : content}
          </p>
        )}

        {edit ? (
          <div className="solution__actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="solution__actions">
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