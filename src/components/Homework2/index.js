import { useState } from "react";


export function Homework2({ id, title, content, setHomeworks, homework }) {

  return (
      <div className="homework__input">
        <div className="username">{`${homework.user.firstName} ${homework.user.lastName}`}</div>
        <div>{`${homework.title}`}</div>
          <p>{content}</p>
      </div>
  );
}