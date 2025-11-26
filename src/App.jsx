import "./App.css";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
import { ReactCore, ReactCoreWithoutJsx } from "./ReactCore";
import { RuleOne } from "./RuleOne";
import { RuleTwo } from "./RuleTwo";
import { RuleThree } from "./RuleThree";
import { RuleFour } from "./RuleFour";
//creating components to render in parent node (App)
//components are functions for displaying the ui using html(jsx)

function App() {
  return (
    <div>
      <ReactCore />
      <ReactCoreWithoutJsx />
      <Welcome />
      <RuleOne />
      <RuleTwo />
      <RuleThree />
      <RuleFour />
      <Button />
    </div>
  );
}

export default App;
