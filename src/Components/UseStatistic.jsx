import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

export default function UseStatistic({ headers=[], data=[], renderRow }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, index) => <th key={index}>{header.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((data) => renderRow(data))}
        </tbody>
      </Table>
    </div>
  )
}