import React, { useState } from "react";

export default function FlightBooker() {
  const today = new Date().toISOString().split("T")[0];

  const [flightType, setFlightType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(today);
  const [returnDate, setReturnDate] = useState(today);

  const isValidDeparture = new Date(departureDate) >= new Date(today);
  const isValidReturn =
    flightType === "one-way" || new Date(returnDate) >= new Date(today);

  const isFormValid =
    (flightType === "one-way" && isValidDeparture) ||
    (flightType === "return" && isValidReturn);

  const handleBook = () => {
    if (flightType === "one-way") {
      alert(`You have booked a one-way flight on ${departureDate}.`);
    } else {
      alert(`You have booked a return flight starting on ${returnDate}.`);
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <h2>✈️ Flight Booker</h2>

      <label>
        Flight Type:{" "}
        <select
          value={flightType}
          onChange={(e) => setFlightType(e.target.value)}
        >
          <option value="one-way">One-Way Flight</option>
          <option value="return">Return Flight</option>
        </select>
      </label>

      <br />
      <br />

      {flightType === "one-way" && (
        <>
          <label>
            Departure Date:{" "}
            <input
              type="date"
              value={departureDate}
              min={today}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </label>
          <br />
          <br />
        </>
      )}

      {flightType === "return" && (
        <>
          <label>
            Return Date:{" "}
            <input
              type="date"
              value={returnDate}
              min={today}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </label>
          <br />
          <br />
        </>
      )}

      <button onClick={handleBook} disabled={!isFormValid}>
        Book Flight
      </button>

      {flightType === "one-way" && !isValidDeparture && (
        <p style={{ color: "red" }}>Departure date can't be in the past.</p>
      )}
      {flightType === "return" && !isValidReturn && (
        <p style={{ color: "red" }}>Return date must be today or later.</p>
      )}
    </div>
  );
}
