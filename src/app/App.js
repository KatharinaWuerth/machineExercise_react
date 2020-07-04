import React, { useState } from "react";
import MachineList from "../machine/MachineList";
import machines from "../mockdata";
import NewMachineForm from "../machine/NewMachineForm";

export default function App() {
  const [list, setList] = useState(machines);

  // state fuer currentMachine muss in der App sein, da die Form nicht weiss, ob auf edit gedrueckt wurde - currentMachine wird dann nach unten durchgereicht]
  const [currentMachine, setCurrentMachine] = useState({
    name: "",
    currentValue: "",
  });

  const [machineId, setMachineId] = useState(6);

  function handleDelete(name) {
    const updatedList = list.filter((machine) => machine.name !== name);
    setList(updatedList);
  }

  function handleCreate(name, value) {
    const newList = [...list];
    const newMachine = {
      name: name,
      currentValue: Number(value),
      id: machineId,
    };
    setList([...newList, newMachine]);
    setMachineId(machineId + 1);
  }

  function handleEdit(id) {
    let editMachine = list.filter((machine) => machine.id === id);
    editMachine = editMachine[0];
    setCurrentMachine(editMachine);
  }

  function handleUpdate(name, value) {
    const newList = [...list];

    let index = newList.map((machine) => machine.id).indexOf(currentMachine.id);

    newList[index].name = name;
    newList[index].currentValue = value;

    setList(newList);
    setCurrentMachine({ name: "", currentValue: "" });
  }

  return (
    <div>
      <MachineList
        machines={list}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <NewMachineForm
        onCreate={handleCreate}
        currentMachine={currentMachine}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
