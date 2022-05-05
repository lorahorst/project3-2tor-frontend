import { Homework } from "../Homework";
import "../../index.css"

export function ShowHomework({ homeworks, setHomeworks, getHomeworks }) {
  return (
    <div className="homework-container">
    <div className="show-Homework">
      {homeworks
        .slice(0)
        .reverse()
        .map(homework => {
          // Pass the id, the content and the setPosts function
          return (
            <Homework 
              key={homework._id}
              id={homework._id}
              title={homework.title}
              content={homework.content}
              solutions={homework.solutions}
              setHomeworks={setHomeworks}
              homework={homework}
              getHomeworks={getHomeworks}
              createdAt={homework.createdAt}
            />
          );
        })}
    </div>
    </div>
  );
      }
