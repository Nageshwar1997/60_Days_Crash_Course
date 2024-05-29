/* eslint-disable react/prop-types */
const Header = (props) => {
  console.log(props);
  const { name, age, hobbies, address, isMarried, foo } = props;
  return (
    <div className="header">
      <p>{name}</p>
      <p>{age}</p>
      {hobbies.map((item) => (
        <p key={item}>{item}</p>
      ))}
      {Object.entries(address).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      <h1>{isMarried.toString()}</h1>
      <button onClick={foo}>Click Me</button>
    </div>
  );
};

export default Header;
