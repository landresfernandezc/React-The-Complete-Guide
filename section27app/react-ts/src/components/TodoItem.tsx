import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ text: string; onRemovedTodo: () => void }> = (
  props
) => {
  return (
    <>
      <li className={classes.item} onClick={props.onRemovedTodo}>
        {props.text}
      </li>
    </>
  );
};
export default TodoItem;
