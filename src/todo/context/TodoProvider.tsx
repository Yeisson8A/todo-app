import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 3,
  todos: [
    {
      id: '1',
      desc: 'Comprar huevos',
      completed: false
    },
    {
      id: '2',
      desc: 'Comprar leche',
      completed: false
    },
    {
      id: '3',
      desc: 'Comprar salchichas',
      completed: false
    }
  ],
  completed: 0,
  pending: 0,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
