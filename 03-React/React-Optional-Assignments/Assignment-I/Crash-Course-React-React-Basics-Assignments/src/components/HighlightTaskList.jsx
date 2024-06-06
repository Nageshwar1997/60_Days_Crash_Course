// src/components/HighlightTaskList.jsx

function HighlightTaskList() {
  const tasks = ["Task 1", "Urgent Task", "Task 3"];
  return (
    <div>
      <strong>Highlight Task List</strong>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ fontWeight: task === "Urgent Task" ? "bold" : "normal" }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightTaskList;
