/* eslint-disable react/prop-types */

const ShowTodos = ({
  todo,
  index,
  page,
  limit,
  handleToggle,
  handleDelete,
}) => {
  const { id, title, completed } = todo;

  return (
    <tr>
      <td>{(page - 1) * limit + index + 1}</td>
      <td>{title}</td>
      <td>{id}</td>
      <td>
        <input
          type="checkbox"
          onChange={() => handleToggle(todo)}
          checked={completed}
        />
      </td>
      <td>
        <button onClick={() => handleDelete(todo)}>Delete</button>
      </td>
    </tr>
  );
};

export default ShowTodos;
