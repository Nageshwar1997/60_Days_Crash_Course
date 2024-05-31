import ButtonWithUseRef from "./ButtonWithUseRef";
import ButtonWithUseState from "./ButtonWithUseState";

function Counter() {
  return (
    <>
      <h2>Counter with useState</h2>
      <ButtonWithUseState />
      <br />
      <hr />
      <h2>Counter with useRef</h2>
      <ButtonWithUseRef />
    </>
  );
}

export default Counter;
