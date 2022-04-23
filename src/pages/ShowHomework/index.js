import styles from "./ShowHomework.module.css";
import { Homework } from "../../components";

export function ShowHomework({ homeworks, setHomeworks }) {
  (
    <div>
      {homeworks.map((homework) => {
        // we pass the id, the content and the setTweets function
        return <Homework key={homework._id} id={homework.id} content={homework.content} setHomeworks={setHomeworks} homework={homework} />;
      })}
    </div>
  );
}
