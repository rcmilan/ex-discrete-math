import React from "react";

interface LogicParams {
  p: boolean;
  q: boolean;
  conn: (p: boolean, q: boolean) => string;
}

const LogicConnectorRow = ({ p, q, conn }: LogicParams) => {
  return (
    <tr>
      <td>{p.toString()}</td>
      <td>{q.toString()}</td>
      <td>{conn(p, q)}</td>
    </tr>
  );
};

export default LogicConnectorRow;
