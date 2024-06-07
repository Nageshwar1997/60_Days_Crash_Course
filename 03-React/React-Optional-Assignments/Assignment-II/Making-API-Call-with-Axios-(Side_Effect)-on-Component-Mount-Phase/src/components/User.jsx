/* eslint-disable react/prop-types */
function User({ avatar, email, first_name, last_name }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <img src={avatar} alt={first_name} />
      <div>
        <strong>Name : </strong>
        {first_name} {last_name}
      </div>
      <div>
        <strong>Email : </strong>
        {email}
      </div>
    </div>
  );
}

export default User;
