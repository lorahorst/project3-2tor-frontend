import { Solution } from "../Solution";

export function ShowSolution({ solutions, setSolutions }) {
  return (
    <div>
      {solutions.map((solution) => {
        // we pass the id, the content and the setTweets function
        return <Solution key={solution._id} id={solution.id} content={solution.content} setSolutions={setSolutions} solution={solution} />;
      })}
    </div>
  );
}