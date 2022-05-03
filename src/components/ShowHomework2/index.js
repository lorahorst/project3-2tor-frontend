import { Homework2 } from "../Homework2";

export function ShowHomework2({ homeworks, setHomeworks }) {
  return (
    <div>
      {homeworks.map((homework) => {
        // we pass the id, the content and the setTweets function
        return <Homework2 key={homework._id} id={homework.id} title={homework.title} content={homework.content} setHomeworks={setHomeworks} homework={homework} />;
      })}
    </div>
  );
}