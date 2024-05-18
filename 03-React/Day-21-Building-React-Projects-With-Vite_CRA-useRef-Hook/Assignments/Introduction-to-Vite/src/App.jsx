import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import ShowTodos from "./components/ShowTodos";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const limit = 10;

  async function fetchPages() {
    setLoading(true);
    try {
      let resp = await fetch(`http://localhost:3000/todos`);
      let data = await resp.json();
      let totalPages = Math.ceil(data.length / limit);
      setTotalPages(totalPages);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  }

  async function fetchTodos(page) {
    setLoading(true);
    try {
      let resp = await fetch(`http://localhost:3000/todos?_page=${page}`);
      let data = await resp.json();
      setTodos(data.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  }

  async function handleDelete(todo) {
    try {
      const resp = await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "DELETE",
      });
      if (resp.ok) {
        fetchTodos(page);
        fetchPages();
      }
      else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleToggle(todo) {
    try {
      const updatedTodo = { ...todo, completed: !todo.completed };
      const resp = await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: updatedTodo.completed }),
      });

      if (resp.ok) {
        setTodos((prevTodos) =>
          prevTodos.map((t) => (t.id === todo.id ? updatedTodo : t))
        );
      } else {
        console.error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    fetchTodos(page);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong.....</h1>;
  }

  return (
    <>
      <div>
        <Pagination setPage={setPage} page={page} totalPages={totalPages} />

        <div>
          <table>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Title</th>
                <th>ID</th>
                <th>Completed</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <ShowTodos
                  key={index}
                  page={page}
                  limit={limit}
                  index={index}
                  todo={todo}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
                />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination setPage={setPage} page={page} totalPages={totalPages} />
      </div>
    </>
  );
}

export default App;
