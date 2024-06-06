// src/components/FruitList.jsx

function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <strong>Fruits List</strong>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
