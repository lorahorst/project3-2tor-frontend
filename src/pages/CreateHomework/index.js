import { Tweet } from "../Tweet/Tweet";

export function Homework({ tweets, setTweets }) {
  return (
    <div>
      {homeworks.map((homework) => {
        return <Homework key={homework._id} id={homework.id} content={homework.content} setHomework={setHomework} homework={homework} />;
      })}
    </div>
  );
}