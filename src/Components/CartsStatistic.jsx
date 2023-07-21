import UseStatistic from "./UseStatistic";
import Pagination from "./Pagination";
import useData from "../hooks/useData";

export default function CartsStatistic() {

  const headers =[
    {label: "UserID"},
    {label: "Date"},
  ]

  const { data, page, handleChangePage } = useData({
    url: 'https://jsonplaceholder.typicode.com/albums'
  });

  return (
    <div>
      <UseStatistic 
        headers={headers}
        data={data}
        renderRow={data => {
          return (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
            </tr>
          )
        }}
      />
      <Pagination page={page} handleChangePage={handleChangePage}/>
    </div>
  );
}