import React from "react";
import TodoItem from "./TodoItem";

const ToDoList = ({ todos }) => {
  return (
    <div className="todos">
      <ul className="card">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
