import { useLoaderData } from "react-router-dom";

const Todos = () => {
  const { todos } = useLoaderData();
  return (
    <table className="table">
      <thead>
        <tr>
          <th>User Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {todos.slice(10).map((todo) => (
          <tr className="even:bg-slate-800" key={todo.id}>
            <td>{todo.userId}</td>
            <td className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Todos;
