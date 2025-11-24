import "./App.css";

//creating components to render in parent node (App)
//components are functions for displaying the ui using html(jsx)

function Welcome() {
  return <h2>Welcome to learning React Core Concepts</h2>;
}
function Button() {
  return <button>Click me</button>;
}
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
