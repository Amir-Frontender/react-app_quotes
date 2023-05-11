import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeToDoAction } from "../store/todoReducer";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const deleteTodo = (elem) => {
    dispatch(removeToDoAction(elem));
  };
  const openTask=(id)=>{
    navigate(`${id}`)
  }
  const [checkbox, setCheckbox] = useState(todo.completed);
  return (
    <li className="card_todo">
      <div className="card__todo-info">
        <p className="card_todo-id">id:{todo.id}</p>
        <div className="card__todo-descr">
          <input
            className="card_todo-input"
            type="checkbox"
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
          <p className="card_todo-title">Text:{todo.title}</p>
        </div>
      </div>
     <div className="card__todo-actions">
        <button className="card_todo-btn close btn" onClick={() => deleteTodo(todo)}>Удалить</button>
        <button className="card_todo-btn btn" onClick={() => openTask(todo.id)}>Открыть</button>
     </div>
    </li>
  );
};

export default TodoItem;
