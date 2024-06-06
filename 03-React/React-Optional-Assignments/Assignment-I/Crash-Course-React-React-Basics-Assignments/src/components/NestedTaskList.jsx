// src/components/NestedTaskList.jsx

function NestedTaskList() {
  const taskGroups = [
    {
      status: "Pending",
      tasks: ["Task 1", "Task 2"],
    },
    {
      status: "Completed",
      tasks: ["Task 3", "Task 4"],
    },
  ];
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "flex",
        gap: "50px",
      }}
    >
      {taskGroups.map((group, index) => (
        <div key={index}>
          <h4>{group.status}</h4>
          <ul>
            {group.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedTaskList;
