import { useEffect } from "react"

const usePractice = () => {
  const [prac,setPrac]=useState([])
  useEffect(()=>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data => setPrac(data))
  },[])

  return [prac]
}

export default usePractice