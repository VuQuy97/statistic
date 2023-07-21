import React from "react";
import UseStatistic from "./UseStatistic";
import Pagination from "./Pagination";

export default function UsersStatitic() {

  const headers =[
    {label: "Name"},
    {label: "Email"},
    {label: "phone"},
  ]

  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(res=>res.json())
      .then(data=>setData(data))
  }, [])

  return (
    <div>
      <UseStatistic 
        headers={headers} 
        data={data}
        renderRow={data => {
          return (
            <tr key={data.id}>
              <td>{data.name.firstname} {data.name.lastname}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          )
        }}
      />
      <Pagination />
    </div>
  );
}
