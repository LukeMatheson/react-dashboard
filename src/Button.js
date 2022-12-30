import React from 'react'

export default function Button(props) {
  if (props.action === "delete") {
    return (
        <button>Delete</button>
      )
  }

  if (props.action === "clear-table") {
    return (
        <button onClick={clearTable}>Clear All Records</button>
      )
  }
}

function clearTable() {
    console.log("This is the clear table function.");
}