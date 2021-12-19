import React, { useState } from "react";
import { IState as Props } from "../common/types";

const AddToList: React.FC<Props> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) {
      alert("Name and age fields are required");
      return;
    } else if (parseInt(input.age) < 0) {
      alert("Age can't be lower than zero");
      return;
    }

    const highestId = Math.max(
      ...people.map((person) => {
        return person.id;
      })
    );

    setPeople([
      ...people,
      {
        id: highestId + 1,
        name: input.name,
        age: parseInt(input.age),
        note: input.note,
        url: input.img,
      },
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        required
        type="text"
        placeholder="Name"
        value={input.name}
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Image url"
        value={input.img}
        className="AddToList-input"
        onChange={handleChange}
        name="img"
      />
      <input
        required
        min="0"
        type="number"
        placeholder="Age"
        value={input.age}
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <textarea
        onChange={handleChange}
        placeholder="Notes"
        value={input.note}
        className="AddToList-input"
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
