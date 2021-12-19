import React, { useState } from "react";
import "./App.css";
import { Person } from "./common/types";
import List from "./components/List";
import AddToList from "./components/ListAdd";

function App() {
  const [people, setPeople] = useState<Person[]>([
    {
      id: 1,
      name: "John Doe",
      url: "https://biomathmodels.org/wp-content/uploads/2017/03/testy3-1.png",
      age: 40,
      note: "vegetarian",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} setPeople={setPeople} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
