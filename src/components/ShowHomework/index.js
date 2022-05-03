import { Homework } from "../Homework";

export function ShowHomework({ homeworks, setHomeworks }) {
  return (
    <div>
      {homeworks.map((homework) => {
        // we pass the id, the content and the setTweets function
        return <Homework key={homework._id} id={homework.id} title={homework.title} content={homework.content} setHomeworks={setHomeworks} homework={homework} />;
      })}
    </div>
  );
}