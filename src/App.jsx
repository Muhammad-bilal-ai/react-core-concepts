import "./App.css";
import { Welcome } from "./Welcome";
import { Button } from "./Button";
//creating components to render in parent node (App)
//components are functions for displaying the ui using html(jsx)

function App() {
  return (
    <div>
      <h1> React Core Concepts</h1>
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
