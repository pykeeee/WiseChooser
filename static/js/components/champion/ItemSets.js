import { useState, useRef } from 'react'
import calcItemSet from '../memos/calcItemSet'
import Filter from './Filter'
import ItemSetSelector from './ItemSetSelector'
import ItemSetSelectorCompact from './ItemSetSelectorCompact'
import PanelSet from './PanelSet'
import useShow from '../hooks/useShow'
import styles from './ItemSets.module.css'

export const ItemSets = ({itemSets,pick,filterData,width}) => {
  const ref = useRef(null)
  const show = useShow(ref)
  const [page,setPage] = useState(20)
  const [excluded,setExcluded] = useState([])
  const handleClick = (e) => setPage(parseInt(e.target.getAttribute('data-id')))
  const filterClick = (e) => {
    if (e.target.getAttribute('data-id') === 'clear') {
      setExcluded([])
      return
    }
    const id = parseInt(e.target.getAttribute('data-id'))
    if (excluded.indexOf(id) >= 0) setExcluded(excluded.filter((item) =>item !== id))
    else setExcluded([...excluded,id])
  }
  if (!itemSets || !Object.keys(itemSets).length) return <div ref={ref}></div>
  return (
    <div ref={ref} className={styles[show ? '' : 'placeholder']}>
      { show && <>
        { (width==='tiny' || width ==='xsmall') && <ItemSetSelectorCompact active={page} handleClick={handleClick} /> }
        { (width!=='tiny' && width !=='xsmall') && <ItemSetSelector active={page} handleClick={handleClick} /> }
        <Filter data={filterData} handleClick={filterClick} excluded={excluded} />
        <PanelSet width={width} data = {calcItemSet(page,itemSets)} excluded={excluded} type="itemset" title="Item" title2="Set" pick={pick} />
      </> }
    </div>
  )
}

export default ItemSets
