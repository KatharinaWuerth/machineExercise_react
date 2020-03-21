import React from 'react';
import { useState, useEffect } from 'react';

//Problem: er reicht von der App die currentMachine richtig bis in die componente NewMachineForm, aber er setzt sie nicht in den state
export default function NewMachineForm({ onCreate, currentMachine }) {
  console.log('vor dem State', currentMachine);
  const [form, setForm] = useState(currentMachine);

  useEffect(() => {
    console.log('UseEffect', form);
  }, [form]);

  function handleOnSubmit(event) {
    event.preventDefault();
    onCreate(form.name, form.currentValue);
  }

  // wir holen die form, die ja schon im state existiert und weisen dem key (dessen Namen wir nicht kennen, da es entweder nameOfNewMachine oder valueOfNewMachine sein kann --> deshalb [] anstelle von .) das value zu
  function onInputChange(key, value) {
    console.log('onInputChange', key, value);
    const newForm = { ...form };
    newForm[key] = value;

    setForm(newForm);
  }
  console.log('vor return', form);
  //onInputChange: gebe ihm key ('nameNewMachine') und value (event.target.value) mit
  //value bei input ist der zweite Teil der kontrollierten componente / info muss rauf und runter gehen
  return (
    <div className="containerNewMachineForm">
      <form className="formElement" onSubmit={event => handleOnSubmit(event)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={event => onInputChange('name', event.target.value)}
            value={form.name}
          ></input>
        </label>
        <label>
          Value
          <input
            type="number"
            name="value"
            onChange={event =>
              onInputChange('valueNewMachine', Number(event.target.value))
            }
            value={form.currentValue}
          ></input>
        </label>
        <button className="button" type="submit">
          Create new Machine
        </button>
      </form>
    </div>
  );
}
