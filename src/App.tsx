import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/ListAdd";

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "John Doe",
      url: "https://biomathmodels.org/wp-content/uploads/2017/03/testy3-1.png",
      age: 40,
      note: "vegetarian",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
