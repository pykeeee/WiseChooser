import {useState, useRef} from 'react'
import CellFilter from './CellFilter'
import PanelHeading from './PanelHeading'
import styles from './PanelFilter.module.css'

export const PanelFilter = ({ width, data = [],type,title,title2 }) => {
  const nVisible ={xlarge:17,large:12,medium:17,small:17,xsmall:12,tiny:10}
  const bufferSize = 6
  const bufferMult = 1.5
  const [maxVisible,setMaxVisible] = useState(false)
  const [position,setPosition] = useState(0)
  const scroll = (e) => { 
    if (!maxVisible) setMaxVisible(true)
    const pos = parseInt(ele.current.scrollLeft/54/bufferSize)
    if (position!==pos) setPosition(pos)
  }
  const ele = useRef(null)
  const mouseDownHandler = (e) => {
    if (!maxVisible) setMaxVisible(true)
    window.dragX = {mouseX:e.clientX,panelX:ele.current.scrollLeft}
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
    ele.current.style.cursor = 'grabbing'
  }
  const mouseMoveHandler = (e) => ele.current.scrollLeft = window.dragX.panelX - e.clientX + window.dragX.mouseX
  const mouseUpHandler = (e) => {
    ele.current.style.cursor = 'grab'
    document.removeEventListener('mousemove',mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  const [filter,setFilter] = useState({row:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},wild:[]})
  const handleClick = (e) => {
    if(e.target.getAttribute('data-id')) {
      const elems = [...e.target.parentNode.children].filter((elem)=>elem.getAttribute('data-count') ? false :true)
      const row = elems.indexOf(e.target)
      let eId = e.target.getAttribute('data-id')
      let rowFilter = filter.row
      let wildFilter = filter.wild
      if (rowFilter[row]) {
        wildFilter.push(eId)
        rowFilter[row] = 0
      } else if (wildFilter.indexOf(eId) !== -1) wildFilter = wildFilter.filter((item)=>item !== eId)
      else rowFilter[row] = eId
      setFilter({row:rowFilter,wild:wildFilter})
    }
  }

  let filterCount = 0
  for (let i=0; i<Object.keys(filter.row).length; i++) if (filter.row[i]>0) filterCount++

  const filteredData = (filterCount + filter.wild.length) ? data.filter((row)=>{
    const items = row[0].toString().split('_').filter((v, i, a) => a.indexOf(v) === i)
    let found = 0
    items.forEach((id,i)=>{
      if (filter.row[i]>0 && filter.row[i] === id) found++
      if (!filter.row[i] && filter.wild.indexOf(items[i])>-1) found++
      if (filter.row[i]>0 && filter.row[i] !== id) return false
    })
    return found === (filterCount + filter.wild.length) ? true : false
  }) : data  

  let visible = []

  if (!maxVisible) visible = filteredData.slice(0,nVisible[width]+1)
  else {
    visible = filteredData.slice(Math.max(0,parseInt(position*bufferSize-bufferMult*bufferSize)),parseInt(position*bufferSize+nVisible[width]+bufferMult*bufferSize))
  }
  const dataWidth = 54*filteredData.length

  if (!filteredData) return <></>
  
  const padding = Math.max(0,position*54*bufferSize-bufferMult*bufferSize*54)
  const max = visible.reduce((max,cell)=>Math.max(max,cell[0].toString().split('_').filter((v, i, a) => a.indexOf(v) === i).length),0)
  return (
    <>
      <PanelHeading title={title} title2={title2} type={type}/>
      <div ref={ele} className={styles.data} onClick={handleClick } onScroll={scroll} onMouseDown={mouseDownHandler}>
        <div style={{width: dataWidth,paddingLeft:padding}}>
        { visible.length>0 && visible.map((cell, i)=><CellFilter key={i} data={cell} filter={filter} max={max}/>) }
        </div>
      </div>
    </>
  )
}

export default PanelFilter
