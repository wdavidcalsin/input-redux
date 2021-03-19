import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addAction } from "./actions/add.action";
import { v4 as uuidv4 } from "uuid";

interface IValue {
  value: string;
  id: string;
}

function App() {
  const [valueInput, setValueInput] = useState<IValue>({} as IValue);

  const addValue = useSelector((state: any) => state.add);
  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    if (Object.entries(valueInput).length !== 0) {
      dispatch(addAction(valueInput));

      setValueInput({ value: "", id: "" });
      console.log(addValue);
    }
  };

  const handleChange = (event: any) => {
    setValueInput({ value: event.target.value, id: uuidv4() });
  };

  return (
    <div className="App">
      <h3>Todo List</h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={valueInput.value} />
        <button type="submit">save</button>
      </form>
      <ul className="list">
        {addValue.map((index: any, key: any) => (
          <li key={key}>
            {key}: {index.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
