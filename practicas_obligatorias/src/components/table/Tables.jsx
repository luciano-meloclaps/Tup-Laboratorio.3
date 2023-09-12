import Table from "react-bootstrap/Table";
import "./Table.css";

function Tables({ netIncomes, avgNetIncomes }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead className="container-table">
        <tr>
          <th>Company</th>
          <th>{netIncomes[0].brand}</th>
          <th>{netIncomes[1].brand}</th>
          <th>{netIncomes[2].brand}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total Revenue</td>
          <td>${netIncomes[0].income}</td>
          <td>${netIncomes[1].income}</td>
          <td>${netIncomes[2].income}</td>
        </tr>
        <tr>
          <td>Average total revenue</td>
          <td colSpan="3">
            <p>${avgNetIncomes}</p>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;
