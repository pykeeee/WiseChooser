import {useState, useRef} from 'react'
import CellSet from './CellSet'
import PanelHeading from './PanelHeading'
import styles from './PanelSet.module.css'

export const PanelSet = ({ width,data,pick,excluded}) => {
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

  const [filter,setFilter] = useState({row:{0:0,1:0,2:0,3:0,4:0,5:0},wild:[]})

  const handleClick = (e) => {
    if(e.target.getAttribute('data-id')) {
      const row = [...e.target.parentNode.children].indexOf(e.target)
      let eId = e.target.getAttribute('data-id')
      let rowFilter = filter.row
      let wildFilter = filter.wild
      if (rowFilter[row]) {
        wildFilter.push(eId)
        rowFilter[row] = 0
      } else if (wildFilter.indexOf(eId) !== -1) wildFilter = wildFilter.filter((item)=>item !== eId)
      else rowFilter[row] = eId
      setFilter({row:rowFilter,wild:wildFilter})
      setPosition(0)
      ele.current.scrollLeft = 0
    }
  }
  if (!data || data.length === 0) return <div className={styles.nodata}>There is no item set data for the given selection</div>

  const filteredData = data.filter((row)=>{
    if (!isNaN(row[0])) row[0] = row[0].toString()
    let items = row[0].split('_')
    let wildCount = 0
    for (let i=0; i<items.length; i++) {
      if (excluded.indexOf(parseInt(items[i])) >= 0) return false
      if (!filter.row[i] && filter.wild.indexOf(items[i])>-1) wildCount++
      if (filter.row[i] && filter.row[i] !== items[i]) return false
    }
    if (filter.wild.length && filter.wild.length===wildCount) return true
    return filter.wild.length ? false : true
  })

  if (!filteredData || filteredData.length === 0) return <div className={styles.nodata}>There is no item set data for the given selection</div>

  if (!filteredData) return <div className={styles.nodata}>There is no item set data for the given selection</div>
  let visible = []
  if (!maxVisible) visible = filteredData.slice(0,nVisible[width]+1)
  else {
    visible = filteredData.slice(Math.max(0,parseInt(position*bufferSize-bufferMult*bufferSize)),parseInt(position*bufferSize+nVisible[width]+bufferMult*bufferSize))
  }
  const dataWidth = 54*filteredData.length
  const padding = Math.max(0,position*54*bufferSize-bufferMult*bufferSize*54)
  return (
    <div className={styles.panel} onClick={handleClick }>
     <PanelHeading title="" type="item2" />
      <div ref={ele} className={styles.data} onScroll={scroll} onMouseDown={mouseDownHandler} >
        <div style={{width: dataWidth,paddingLeft:padding}}>
          { visible.map((cell, i) => <CellSet key={i} data={cell} pick={pick} filter={filter}/>) }
        </div>
      </div>
    </div>
  )
}

export default PanelSet