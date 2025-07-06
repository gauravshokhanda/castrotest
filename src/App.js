import React, { useState } from "react";
import FlightBooker from "./FlightBooker";
import GroupByDemo from "./GroupByDemo";

function App() {
  const [selected, setSelected] = useState("flight");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          background: "#0A6E6E",
          color: "white",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h3>📘 Menu</h3>
        <div
          style={{
            marginTop: "20px",
            cursor: "pointer",
            padding: "10px",
            background: selected === "flight" ? "#0D8888" : "transparent",
            borderRadius: "8px",
          }}
          onClick={() => setSelected("flight")}
        >
          ✈️ Flight Booker
        </div>
        <div
          style={{
            marginTop: "10px",
            cursor: "pointer",
            padding: "10px",
            background: selected === "group" ? "#0D8888" : "transparent",
            borderRadius: "8px",
          }}
          onClick={() => setSelected("group")}
        >
          🔁 GroupBy Demo
        </div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#f4f4f4",
          overflowY: "auto",
        }}
      >
        {selected === "flight" && <FlightBooker />}
        {selected === "group" && <GroupByDemo />}
      </div>
    </div>
  );
}

export default App;
