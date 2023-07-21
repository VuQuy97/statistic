import React from "react";
import UseStatistic from "./UseStatistic";
import PagesA from "./PagesA";
import useData from "./useData";

export default function CartsStatistic() {

  const headers =[
    {label: "UserID"},
    {label: "Date"},
  ]

  const { state, handleChangePage } = useData({
    url: 'https://jsonplaceholder.typicode.com/albums?_limit=5&_page='
  });

  return (
    <div>
      <UseStatistic 
        headers={headers}
        data={state.data}
        renderRow={data => {
          return (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
            </tr>
          )
        }}
      />
      <PagesA page={state.page} handleChangePage={handleChangePage}/>
    </div>
  );
}