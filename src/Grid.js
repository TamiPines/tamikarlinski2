import React from 'react';
import Table from 'react-bootstrap/Table'
const Grid = ({ config, data }) => (
  <Table style={{ width: "100%", border: "solid", borderColor: "rgb(173, 173, 173)", backgroundColor: "rgba(207, 201, 207, 0.993) " }}  >
    <thead>
      <tr style={{ backgroundColor: "rgb(241, 14, 120)" }}>
        {config.map(item => <th>{item.title}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map(data =>
        <tr>
          {config.map((item) => item.component ? <td>{item.component({ data: data[item.field] })}</td> :
            <td>{data[item['field']]}</td>
          )}
        </tr>)}
    </tbody>
  </Table>
);

export default Grid;