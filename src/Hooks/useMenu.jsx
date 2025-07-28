import { useState } from "react"

const useMenu = () => {
  const [menu,setMenu] = useState([])
  const [loading,setLoading] = useState(true)

  useState(()=>{
    fetch('http://localhost:3000/menu')
    .then(res => res.json())
    .then ( data => {
        setMenu(data)
        setLoading(false)
    })
  },[])

  return [menu,loading]
}

export default useMenu