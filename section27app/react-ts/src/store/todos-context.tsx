import React, { useState } from "react";
import Todo from "../models/Todo";
type TodosContextObj= {
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
  }
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const items = [
      new Todo("React The Complete Course"),
      new Todo("Learn Typescript"),
    ];
    const addTodoHanlder = (todoText: string) => {
      const newTodo= new Todo(todoText);
      setTodos([...todos,newTodo])
    };
    const removeTodoHandler=(todoId:string)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo=> todo.id!==todoId);
      })
    };
    const contextValue :TodosContextObj={
        items: todos,
        addTodo: addTodoHanlder,
        removeTodo: removeTodoHandler
    } 
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};
export default TodosContextProvider;