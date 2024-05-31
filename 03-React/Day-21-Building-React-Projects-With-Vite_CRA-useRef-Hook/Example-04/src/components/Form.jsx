import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    country: "",
    isMarried: false,
  });
  const { name, age, country, isMarried } = formData;

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]:
          type == "checkbox" ? checked : type == "number" ? +value : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name :{" "}
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
            value={name}
            placeholder="Enter Name"
          />
        </label>
        <br />
        <label>
          Age :{" "}
          <input
            onChange={handleInputChange}
            type="number"
            name="age"
            value={age}
            placeholder="Enter Age"
          />
        </label>
        <br />
        <label>
          Country :{" "}
          <select onChange={handleInputChange} name="country" value={country}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
          </select>
        </label>
        <br />
        <label>
          isMarried :{" "}
          <input
            onChange={handleInputChange}
            type="checkbox"
            name="isMarried"
            checked={isMarried}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
