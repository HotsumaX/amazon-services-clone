import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const services = [
  {
    name: "Amazon",
    element: "A",
    service: "Athena"
  },
  {
    name: "Amazon",
    element: "Cs",
    service: "CloudSearch"
  },
  {
    name: "AWS",
    element: "Mq",
    service: "MQ"
  }
];

const Box = ({ items }) => {
  return (
    <div className="border">
      <div className="title">{items.name}</div>
      <div className="element">{items.element}</div>
      <div className="element-name">{items.service}</div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Box items={services[0]} />
      <br />
      <Box items={services[1]} />
      <br />
      <Box items={services[2]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
