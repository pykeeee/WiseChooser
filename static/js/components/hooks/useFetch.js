import {useState, useEffect} from 'react'

export const useFetch = (url,key,delay=0,isJson=true) => {
  const [data, setData] = useState({[key]:false})
  useEffect(() => {
    let active = url ? true : false
    const fetchData = async () => {
      if (delay) await new Promise(r => setTimeout(r, delay))
      const response = active ? await fetch(url) : false
      const fetched = active ? await (isJson ? response.json() : response.text()) : false
      if (active) setData({[key]:fetched})
    }
    if (url) fetchData()
    return () => active = false
  }, [url,key,delay,isJson])
  return data[key]
}
export default useFetch
