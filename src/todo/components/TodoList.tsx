import { TodoItem } from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {
  const {todos} = useTodos();

  return (
    <ul>
        {
            todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
    </ul>
  );
};
