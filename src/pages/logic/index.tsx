import React from "react";
import LogicConnector from "../../components/logicConnector";
import "./logic.css";

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
  <div>
    <p>AND</p>
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
          <LogicConnector key={i} p={v[0]} q={v[1]} conn={_and} />
        ))}
      </tbody>
    </table>
  </div>
);

const orTable = (
  <div>
    <p>OR</p>
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
          <LogicConnector key={i} p={v[0]} q={v[1]} conn={_or} />
        ))}
      </tbody>
    </table>
  </div>
);

function Logic() {
  return (
    <>
      {andTable}
      {orTable}
    </>
  );
}

export default Logic;
