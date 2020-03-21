import React, { useState } from 'react';
import MachineList from '../machine/MachineList';
import machines from '../mockdata';
import NewMachineForm from '../machine/NewMachineForm';

export default function App() {
  const [list, setList] = useState(machines);
  // state fuer currentMachine muss in der App sein, da die Form nicht weiss, ob auf edit gedrueckt wurde - currentMachine wird dann nach unten durchgereicht]
  const [currentMachine, setCurrentMachine] = useState({});

  // eine id wäre zum identifieziren besser
  function handleDelete(name) {
    const updatedList = list.filter(machine => machine.name !== name);
    setList(updatedList);
  }

  function handleCreate(name, value) {
    const newMachine = { name: name, currentValue: value };
    const newList = [...list, newMachine];
    setList(newList);
  }

  // habe maschine, die ich editieren möchte, identifiziert. Jetzt müsste ich sie in die Form einsetzten, bearbeiten können und dann fragen, ob es die machine schon gibt, wenn ja, die alte maschine mit den neuen Daten überschreiben
  function handleEdit(name) {
    let editMachine = list.filter(machine => machine.name === name);
    editMachine = editMachine[0];
    console.log('handleEdit', editMachine);
    setCurrentMachine(editMachine);
  }
  return (
    <div>
      <MachineList
        machines={list}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <NewMachineForm onCreate={handleCreate} currentMachine={currentMachine} />
    </div>
  );
}
