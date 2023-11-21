import React from "react";
import Colors  from "./Colors";

function App() {
  const colorArray =[
    {id:1, color: "red"},
    {id:2, color: "yellow"},
    {id:3, color: "blue"},
  ]
  return (
    <div>
      <Colors colorArray={colorArray} />
    </div>
  )
}
export default App
