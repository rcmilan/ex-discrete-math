import React from "react";
import TruthTableRow from "../../components/truthTableRow";
import "./logic.css";

const wrapperStyle: React.CSSProperties = {
  padding: "10px",
};

const _and = (p: boolean, q: boolean) => (p && q).toString();
const _or = (p: boolean, q: boolean) => (p || q).toString();
const _not = (p: boolean) => (!p).toString();

const cases = [
  [true, true],
  [true, false],
  [false, true],
  [false, false],
];

const andTable = (
  <table>
    <thead>
      <tr>
        <th>p</th>
        <th>q</th>
        <th>p AND q</th>
      </tr>
    </thead>
    <tbody>
      {cases.map((v, i) => (
        <TruthTableRow key={i} p={v[0]} q={v[1]} conn={_and} />
      ))}
    </tbody>
  </table>
);

const orTable = (
  <table>
    <thead>
      <tr>
        <th>p</th>
        <th>q</th>
        <th>p OR q</th>
      </tr>
    </thead>
    <tbody>
      {cases.map((v, i) => (
        <TruthTableRow key={i} p={v[0]} q={v[1]} conn={_or} />
      ))}
    </tbody>
  </table>
);

function Logic() {
  return (
    <>
      <div style={wrapperStyle}>{andTable}</div>
      <div style={wrapperStyle}>{orTable}</div>
    </>
  );
}

export default Logic;
