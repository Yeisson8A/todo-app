import { useTodos } from "../hooks/useTodos";

export const Title = () => {
  const { totalTodos, pendingTodos } = useTodos();

  return (
    <div>
        <h1>Todos: {totalTodos}</h1>
        <h1>Pendientes: {pendingTodos}</h1>
    </div>
  );
};
