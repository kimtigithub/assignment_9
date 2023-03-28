import React from "react";
import Card from "./components/Card";
import List from "./components/List";
import TypeMe from "./components/TypeMe";
import MyForm from "./components/MyForm";
function App() {
  const users = [
    { id: 1, name: "John Doe", job: "Engineer", hobby: "Listen to music" },
    { id: 2, name: "Jane Smith", job: "Programmer", hobby: "Running" },
    { id: 3, name: "John Doe", job: "Farmer", hobby: "Swimming" },
  ];
  return (
    <div className="app">
      <div>
        <Card name="John Doe" job="Engineer" hobby="Reading" />
      </div>
      <div>
        <List users={users} />
      </div>
      <div>
        <TypeMe />
      </div>
      <div>
        <MyForm />
      </div>
    </div>
  );
}

export default App;
