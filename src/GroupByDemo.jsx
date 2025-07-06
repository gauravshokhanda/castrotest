import React, { useEffect, useState } from "react";

// ✅ Define groupBy method for all arrays
/* eslint-disable no-extend-native */
Array.prototype.groupBy = function (keySelector) {
  if (!Array.isArray(this) || this.length === 0) return {};

  return this.reduce((groups, item) => {
    const key = item != null ? keySelector(item) : "null";
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
};

export default function GroupByDemo() {
  const [evenOddGroups, setEvenOddGroups] = useState({});
  const [firstDigitGroups, setFirstDigitGroups] = useState({});
  const [mixedGroups, setMixedGroups] = useState({});

  useEffect(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const evenOdd = numbers.groupBy((x) => (x % 2 === 0 ? "Even" : "Odd"));
    const firstDigit = numbers.groupBy((x) => String(x)[0]);

    const mixed = [null, undefined, 10, "hello", 42, null, "test"];
    const mixedGroup = mixed.groupBy((x) => (x == null ? "nullish" : typeof x));

    setEvenOddGroups(evenOdd);
    setFirstDigitGroups(firstDigit);
    setMixedGroups(mixedGroup);
  }, []);

  const renderGroup = (title, group) => (
    <div style={{ marginBottom: 20 }}>
      <h4>{title}</h4>
      <pre>{JSON.stringify(group, null, 2)}</pre>
    </div>
  );

  const formula = `
Array.prototype.groupBy = function (keySelector) {
  if (!Array.isArray(this) || this.length === 0) return {};

  return this.reduce((groups, item) => {
    const key = item != null ? keySelector(item) : "null";
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
};`.trim();

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "auto",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <h2>🔁 GroupBy Demo</h2>
      <h4>🧠 Implementation (groupBy formula)</h4>
      <pre
        style={{
          backgroundColor: "#f4f4f4",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        {formula}
      </pre>

      {renderGroup("Even / Odd Grouping", evenOddGroups)}
      {renderGroup("First Digit Grouping", firstDigitGroups)}
      {renderGroup("Mixed Values Grouping", mixedGroups)}
    </div>
  );
}
