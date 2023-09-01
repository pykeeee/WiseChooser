import { useState,useEffect } from 'react'

function useWidth() {
  const timeOut = 50
  const calcBreakPoint = (type) => {
    const breakpoints = {
      'size':{
        sizes:[1954,1366,982,740,640,0], //1062
        names:['xlarge','large','medium','small','xsmall','tiny']
      },
      'ads':{
        sizes:[1714,1300,0],
        names:['big','small','none']
      },
      'menu':{
        sizes:[1442,0],
        names:['menu','none']
      }
    }
    let i=0
    while (window.innerWidth<breakpoints[type].sizes[i]) i++
    return breakpoints[type].names[i]
  }

  const [width,setWidth] = useState(window.innerWidth)

  useEffect(() => {
    let active = true
    let resizeTimeout
    const listener = (e) => {
      let currentWidth = window.innerWidth
      resizeTimeout = setTimeout(() => {
        if (currentWidth === window.innerWidth && window.innerWidth !== width && active) setWidth(window.innerWidth)
      },timeOut)      
    } 
    window.addEventListener('resize', listener)
    return () => {
      active = false
      window.removeEventListener('resize', listener, true)
      clearTimeout(resizeTimeout)
    }
  }, [width])
  const size = calcBreakPoint('size')
  const ads = calcBreakPoint('ads')
  const menu = calcBreakPoint('menu')
  return {width,size,ads,menu}
}

export default useWidth
