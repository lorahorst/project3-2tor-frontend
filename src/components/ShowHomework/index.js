import { Homework } from "../Homework";

export function ShowHomework({ homeworks, setHomeworks, getHomeworks }) {
  return (
    <div className="p-20 flex flex-col gap-10">
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
              comments={homework.comments}
              setPosts={setHomeworks}
              post={homework}
              getPosts={getHomeworks}
              createdAt={homework.createdAt}
            />
          );
        })}
    </div>
  );
}