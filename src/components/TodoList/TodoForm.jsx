import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
