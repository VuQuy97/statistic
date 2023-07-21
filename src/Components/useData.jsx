import React from "react"

export default function useData({ url }) {
  const [state, setState] = React.useState({
    page: 1,
    data: [],
  })

  const handleChangePage = (page) => {
    setState(prev => ({
      ...prev,
      page: page
    }))
  }
  
  React.useEffect(() => {
    fetch(`${url}${state.page}`)
      .then(res=>res.json())
      .then(data=>setState((prev) => ({
        ...prev,
        data: data
      })))
  }, [state.page])
  return {
    state: state,
    handleChangePage
  }
}