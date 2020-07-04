import React from "react";
import Machine from "./Machine";

export default function MachineList({ machines, onDelete, onEdit }) {
  return (
    <div className="containerMachineList">
      {machines.map((machine) => (
        <Machine
          key={machine.name}
          machine={machine}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
