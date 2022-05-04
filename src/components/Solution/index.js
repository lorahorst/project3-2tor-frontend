import { useState, useContext } from "react";
import { client } from "client";
import { AuthContext } from "context";

// Receive the id, the content and the setComment function
export function Solution({
  fetchHomework,
  id,
  solutionContent,
  setSolution,
  solution,
  deleteSolution,
  updateSolution,
}) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newSolutionContent, setNewSolutionContent] = useState(solutionContent);

  // handle Comment deletion
  const handleDelete = solutionId => {
    (async function () {

      // Make the request
      const result = await client.delete(`/sol/${id}`);
      deleteSolution(solutionId);
    })();
  };

  // Handle the change of variable showAll
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
    // Function to EDIT the comments from the backend
    (async function () {

      // Make the request
      const result = await client.put(
        `/sol/${id}`,
        {
          solutionContent: newSolutionContent,
        },
      );
      fetchHomework();
    })();

    handleCancel();
  };

  return (
    <>
      <div>
        <div>
          <div>{`${solution.user}`}</div>

          {edit ? (
            <textarea
              value={newSolutionContent}
              onChange={event => setNewSolutionContent(event.target.value)}
            />
          ) : showAll ? (
            <p>{solutionContent}</p>
          ) : (
            <p>
              {solutionContent.length > 100
                ? `${solutionContent.substring(0, 100)}...`
                : solutionContent}
            </p>
          )}

          {edit ? (
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              {solutionContent.length > 100 && (
                <button onClick={handleShowAll}>
                  {showAll ? "Read less" : "Read more"}
                </button>
              )}
              <button onClick={handleEdit}>Edit</button>
              <button
                onClick={() => {
                  handleDelete(solution._id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}