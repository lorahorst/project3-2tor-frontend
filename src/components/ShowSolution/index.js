import { Solution } from "../Solution";

export function ShowSolution({
  solutions,
  setSolutions,
  fetchHomework,
  deleteSolution,
}) {
  return (
    <div>
      {solutions &&
        solutions
          .slice(0)
          .reverse()
          .map(solution => {
            // Pass the id, the content and the setComments function
            return (
              <Solution
                key={solution._id}
                fetchPost={fetchHomework}
                id={solution._id}
                solutionContent={solution.solutionContent}
                setSolutions={setSolutions}
                solution={solution}
                deleteSolution={deleteSolution}
              />
            );
          })}
    </div>
  );
}