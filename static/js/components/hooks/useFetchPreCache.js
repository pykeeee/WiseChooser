import {useState, useEffect} from 'react'

export const useFetchPreCache = (url,key) => {
  const [data, setData] = useState({[key]:false})
  useEffect(() => {
    let active = url ? true : false
    if (url && window.precache && window.precache[url.split("?")[1]]) active = false
    const fetchData = async () => {
      // if (delay) await new Promise(r => setTimeout(r, delay))
      try {
        const response = active ? await fetch(url) : false
        const json = active && response ? await response.json() : false
        if (active) setData({[key]:json})
      }
      catch (err) {  
        // console.log(err)
      }
    }
    if (active && !data[key]) fetchData()
    return () => active = false
  }, [url,key,data])
  return (url && window.precache && window.precache[url.split("?")[1]]) ? window.precache[url.split("?")[1]] : data[key]
}
export default useFetchPreCache
