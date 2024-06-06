import "./App.css";
import CustomFormSubmissionHandling from "./components/CustomFormSubmissionHandling";
import DynamicFormInputFocus from "./components/DynamicFormInputFocus";
import RealTimeInputValidation from "./components/RealTimeInputValidation";

function App() {
  return (
    <div>
      <h1>Dynamic Form with useRef</h1>
      <h2>1. Dynamic Form Input Focus</h2>
      <DynamicFormInputFocus />
      <h2>Real-Time Input Validation</h2>
      <RealTimeInputValidation />
      <h2>Custom Form Submission Handling</h2>
      <CustomFormSubmissionHandling />
    </div>
  );
}

export default App;
