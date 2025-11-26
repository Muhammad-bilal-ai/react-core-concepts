import React from "react";

export const ReactCore = () => {
  return (
    <div id="container">
      <h1>React Core Concepts</h1>
    </div>
  );
};

export const ReactCoreWithoutJsx = () => {
  return React.createElement(
    "div",
    { id: "container" },
    React.createElement("h1", null, "hello bilal")
  );
};
