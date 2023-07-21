import React from "react"

export default function useData({ url }) {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const handleChangePage = (page) => {
    setPage(page)
  }
  
  React.useEffect(() => {
    fetch(`${url}?_limit=5&_page=${page}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [url, page])

  return {
    data,
    handleChangePage
  }
}