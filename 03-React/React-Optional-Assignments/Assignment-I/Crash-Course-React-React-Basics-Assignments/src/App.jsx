import "./App.css";
import Card1 from "./components/Card1";
import UserList1 from "./components/UserList1";
import Welcome1 from "./components/Welcome1";
import UserCard1 from "./components/UserCard1";
import ItemList1 from "./components/ItemList1";
import Container from "./components/Container";
import Greeting1 from "./components/Greeting1";
import ProductList from "./components/ProductList";
import Welcome from "./components/Welcome";
import FruitList from "./components/FruitList";
import NestedList1 from "./components/NestedList1";
import HighlightTaskList from "./components/HighlightTaskList";
import ProfileCard from "./components/ProfileCard";
import ButtonClick1 from "./components/ButtonClick1";
import HighlightList1 from "./components/HighlightList1";
import ConditionalMessage1 from "./components/ConditionalMessage1";
import NestedTaskList from "./components/NestedTaskList";
import LoginMessage from "./components/LoginMessage";
import Greeting from "./components/Greeting";
import ToggleButton from "./components/ToggleButton";

function ComponentWrappedWithinCard1Component() {
  return <div>This component is wrapped within Card 1 Component</div>;
}

function ComponentWrapperWithinContainerComponent() {
  return <h4>This component is wrapped within Container Component</h4>;
}

function App() {
  const user1 = { name: "Oliver Queen", email: "kTqZs@example.com" };
  const user2 = { name: "Barry Allen", age: 24, location: "Metropolis" };

  return (
    <>
      Uncomment to view particular component
      <div>
        <p className="heading">Problem 1: Basic JSX</p>
        <Greeting1 />
        <Welcome />
      </div>
      <div>
        <p className="heading">Problem 2: Conditional Rendering with JSX</p>
        <ConditionalMessage1 isLoggedIn={true} />
        <LoginMessage isLoggedIn={true} />
      </div>
      <div>
        <p className="heading">Problem 3: Rendering Lists with JSX</p>
        <span className="flex">
          <ItemList1 />
          <FruitList />
        </span>
      </div>
      <div>
        <p className="heading">Problem 4: Handling Events with JSX</p>
        <span className="flex">
          <ButtonClick1 />
          <ToggleButton />
        </span>
      </div>
      <div>
        <p className="heading">Problem 5: Basic Component</p>
        <Welcome1 name="Bruce Wayne" />
        <Greeting message="I am Batman" />
      </div>
      <div>
        <p className="heading">Problem 6: Component with Multiple Props</p>
        <UserCard1 {...user1} />
        <ProfileCard {...user2} />
      </div>
      <div>
        <p className="heading">Problem 7: Component with Children</p>
        <Card1>
          <ComponentWrappedWithinCard1Component />
        </Card1>
        <Container>
          <ComponentWrapperWithinContainerComponent />
        </Container>
      </div>
      <div>
        <p className="heading">Problem 8: Rendering List of Objects</p>
        <span className="flex">
          <UserList1 />
          <ProductList />
        </span>
      </div>
      <div>
        <p className="heading">
          Problem 9: Conditional Rendering and Conditional Styling in List
        </p>
        <span className="flex">
          <HighlightList1 />
          <HighlightTaskList />
        </span>
      </div>
      <div>
        <p className="heading">Problem 10: Rendering Nested Lists</p>
        <NestedList1 />
        <NestedTaskList />
      </div>
    </>
  );
}

export default App;
