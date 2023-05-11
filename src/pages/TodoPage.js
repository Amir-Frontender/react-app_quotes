import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../API/Api";
import TodoSearch from "../components/TodoSearch";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { getFilteredToDo, getToDoAction } from "../store/todoReducer";

const TodoPage = () => {
  const todos = useSelector((state) => state.filteredTodos);
  const [completed, setCompleted] = useState([])
  const [undone, setUndone] = useState([])
  const dispatch = useDispatch();
  
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getToDoAction(data));
    dispatch(getFilteredToDo(data));
  }
  useEffect(() => {
    fetchData();
    setCompleted(todos.filter(todo=> todo.completed))
    setUndone(todos.filter(todo=> !todo.completed))
  }, []);



  return (
    <div className="main__container container" >
      <h1>Страница задач</h1>
      <p>Всего: {todos.length}</p>
      <p>Выполненных: {completed.length}</p>
      <p>Не выполненных: {undone.length}</p>

      <TodoSearch />
      <ToDoForm />
      <ToDoList todos={todos} />
    </div>
  );
};

export default TodoPage;
