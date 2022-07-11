import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  console.log(React);

  // function handleClick() {
  //   alert("Hi");
  // }

  return (
    <div className="container">
      <h1>Fill the form!</h1>
      <form onSubmit={handleSubmit} className="h-center w-50">
        <Input name="Name" value={name} onChange={changeName} />
        <Input name="Age" value={age} onChange={changeAge} />
        <Select name="Favourite Color" value={color} onChange={changeColor} />
        <button type="submit" className="btn-success">
          Submit
        </button>
        <br></br>
        {/* <button onClick={handleClick}>Clear</button> */}
        <button type="reset" className="btn-secondary">
          Reset
        </button>
      </form>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="pa-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="pa-16">
      <label>{name}</label>

      <select value={value} onSelect={onChange} className="w-100">
        <option value="red">Red</option>
        <option value="red">Blue</option>
        <option value="red">Yellow</option>
        <option value="red">Orange</option>
        <option value="skyblue">Skyblue</option>
        <option value="green">Green</option>
        <option value="pink">Pink</option>
        <option value="pink">Cyan</option>
        <option value="pink">Grey</option>
        <option value="pink">Black</option>
        <option value="pink">White</option>
      </select>
    </div>
  );
};
