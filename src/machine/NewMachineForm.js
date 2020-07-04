import React from "react";
import { useState, useEffect } from "react";

export default function NewMachineForm({ onCreate, onUpdate, currentMachine }) {
  const [form, setForm] = useState(currentMachine);
  const [createMode, setCreateMode] = useState(!currentMachine.name);

  // "asgasg" = truthy
  // "", null, undefined = falsy
  //
  // truthy -> boolean -> true
  //
  // !!"asgasg" -> true
  // "asasg" -> true
  // "" -> false
  // null -> false
  // undefined -> false
  //
  // 0 falsy
  // 1 truthy
  // 5 truthy
  // !!zahl     zahl != 0 und zahl nicht null und nicht undefined

  useEffect(() => {
    setForm(currentMachine);
    setCreateMode(!currentMachine.name);
  }, [currentMachine]);

  function handleOnSubmit(event) {
    event.preventDefault();
    if (createMode) {
      onCreate(form.name, form.currentValue);
      form.name = "";
      form.currentValue = "";
    } else {
      onUpdate(form.name, form.currentValue);
      form.name = "";
      form.currentValue = "";
    }
  }

  // wir holen die form, die ja schon im state existiert und weisen dem key (dessen Namen wir nicht kennen, da es entweder nameOfNewMachine oder valueOfNewMachine sein kann --> deshalb [] anstelle von .) das value zu
  function onInputChange(key, value) {
    const newForm = { ...form };
    newForm[key] = value;

    setForm(newForm);
  }

  //onInputChange: gebe ihm key ('nameNewMachine') und value (event.target.value) mit
  //value bei input ist der zweite Teil der kontrollierten componente / info muss rauf und runter gehen
  return (
    <div className="containerNewMachineForm">
      <form className="formElement" onSubmit={(event) => handleOnSubmit(event)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={(event) => onInputChange("name", event.target.value)}
            value={form.name}
          />
        </label>
        <label>
          Value
          <input
            type="number"
            name="value"
            onChange={(event) =>
              onInputChange("currentValue", event.target.value)
            }
            value={form.currentValue}
          />
        </label>
        <button className="button" type="submit">
          {createMode ? "Create new Machine" : "Edit Machine"}
        </button>
      </form>
    </div>
  );
}
