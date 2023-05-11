import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoAction } from "../store/todoReducer";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ text: "", body: "" });
  function addToDo() {
    const new_todo = {
      id: Date.now(),
      text: form.text,
      body: form.body,
    };
    dispatch(addToDoAction(new_todo));
  }
  return (
    <div className="form-card">
      <input
        className="form__input input"
        type="text"
        placeholder="Text..."
        value={form.text}
        onChange={(e) => setForm({ ...form, text: e.target.value })}
      />
      <input
        className="form__input input"
        type="text"
        placeholder="Body..."
        value={form.body}
        onChange={(e) => setForm({ ...form, body: e.target.value })}
      />
      <button className="form__btn btn" onClick={addToDo}>Добавить</button>
    </div>
  );
};

export default ToDoForm;
