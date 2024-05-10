// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function ProductCard({ product }) {
//   return (
//     <div>
//       <img width={200} src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>{product.description}</p>
//       <p>{product.category}</p>
//       <p>{product.price}</p>
//       <p>{product.rating.rate}</p>
//       <p>{product.rating.count}</p>

//     </div>
//   )
// }
// function App() {
//   const [count, setCount] = useState(0);
//   const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   document.title = "Counter Application";
//   //   console.log("Callback inside useEffect called");
//   // }, [count]);
//   // console.log("Rendering.....");

//   useEffect(() => {
//     async function fetchAndUpdateData() {
//       try {
//         let res = await axios({
//           method: "get",
//           url: "http://fakestoreapi.com/products",
//         });
//         setProducts(res.data);
//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchAndUpdateData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import React, { useState, useEffect } from "react";

function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <img width={200} src={user?.avatar} alt={user?.first_name} />
      <h3>
        Name: {user?.first_name} {user?.last_name}
      </h3>
      <p>Email: {user?.email}</p>
    </div>
  );
}

function loadingIndicator(loading) {
  if (loading) {
    return <p>Loading...</p>;
  }
}

function errorIndicator(error) {
  if (error) {
    return <p>Something went wrong...{error}</p>;
  }
}
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    try {
      // complete code
      let res = await axios({
        method: "get",
        url: "https://reqres.in/api/users",
      });

      setUsers(res?.data?.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      // complete code
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(function () {

    // complete code
    setLoading(true);
    
    fetchAndUpdateData();
  }, []);

  if (loading) return loadingIndicator(loading);
  
  if (error) return errorIndicator(error);


  return (
    <div className="App">
      <h1>List of users</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {users?.map((user) => (
          <UserCard key={user?.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
