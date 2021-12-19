import React from "react";
import { IState as IProps } from "../common/types";

const List: React.FC<IProps> = ({ people, setPeople }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="Person" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
          <button
            className="AddToList-btn"
            onClick={() => setPeople(people.filter((p) => p.id !== person.id))}
          >
            X
          </button>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
