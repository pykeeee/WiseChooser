import { useState, useEffect } from 'react'

export const useShow = (ref) => {
  const [show,setShow] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!show && entry.isIntersecting) setShow(true)
      }
    ,{rootMargin:'150px'})
    observer.observe(ref.current)
    return () => { observer.disconnect() }
  }, [ref,show])
  return show
}

export default useShow
