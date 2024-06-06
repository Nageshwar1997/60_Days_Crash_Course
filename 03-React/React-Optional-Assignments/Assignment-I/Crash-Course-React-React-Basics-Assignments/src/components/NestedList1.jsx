// src/components/NestedList1.jsx

function NestedList1() {
  const categories = [
    {
      name: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Broccoli", "Spinach"],
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
      {categories.map((category, index) => (
        <div key={index}>
          <h4>{category.name}</h4>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedList1;
