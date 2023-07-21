import React from "react";
import UseStatistic from "./UseStatistic"
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';

export default function ProductsStatitic() {

  const headers =[
    {label: "Image"},
    {label: "Title"},
    {label: "Price"},
    {label: "Category"}
  ]
  const [data, setData] = React.useState();
  const [limit, setLimit] = React.useState(5);
  const [state, setState] = React.useState({
    limit: 5,
    data: [],
    activePage: 1,
  });

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${state.limit}`)
      .then(res=>res.json())
      .then(data=>setData(data))
  }, [state.limit])
  return (
    <div>
      <div>
        <Dropdown onSelect={(e) => {
          setState({...state, limit:e})
        }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Setlimit
          </Dropdown.Toggle>
          <br /><br />
          <Dropdown.Menu>
            <Dropdown.Item eventKey={5}>5</Dropdown.Item>
            <Dropdown.Item eventKey={10}>10</Dropdown.Item>
            <Dropdown.Item eventKey={20}>20</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <UseStatistic 
        headers={headers} 
        data={data} 
        renderRow={data => {
          return (
            <tr key={data.id}>
              <td>
                <img src={data.image} alt="Mô tả hình ảnh" style={{ width: '40px', height: '40px' }}/>
              </td>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>{data.category}</td>
            </tr>
          )
        }}
      />
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}
          
        </Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  )
}
