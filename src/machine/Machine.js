import React from "react";

export default function Machine({ machine, onDelete, onEdit }) {
  return (
    <div className="containerMachine">
      <h2 className="machineName">{machine.name}</h2>
      <div className="currentValue">{machine.currentValue}</div>
      <p>
        Status:{" "}
        <span className={machine.currentValue >= 50 ? "green" : "red"}>
          {machine.currentValue >= 50 ? "Good" : "Attention"}
        </span>
      </p>
      <button className="button" onClick={() => onDelete(machine.name)}>
        remove
      </button>
      <button className="button" onClick={() => onEdit(machine.id)}>
        edit
      </button>
    </div>
  );
}
