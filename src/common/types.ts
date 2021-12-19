export type Person = {
  id: number;
  name: string;
  url: string;
  age: number;
  note?: string;
};

export interface IState {
  people: Person[];
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>;
}
