import React from 'react'
import Item from '../images/Item'
import WinRate from '../misc/WinRate'
import styles from './CellFilter.module.css'

export const CellFilter = ({data,filter,max}) => {
  let count = {} 
  const allItems = data[0].toString().split('_')
  const items = allItems.filter((v, i, a) => a.indexOf(v) === i)
  allItems.forEach((item,i) => {
    if (!count[item]) count[item] = 0
    count[item]++
  })

  const filters = items.map((id,i)=>{
    if(filter.row[i]) return 1
    if(filter.wild.indexOf(id.toString()) >-1) return 2
    return 0
  })

  const padding=(max-items.length)*52
  return (
    <div className={styles.itemset}>
      <div styles={styles.items}>
        {items.map((id,i)=>
          <React.Fragment key={i}>
            { id && <Item id={Number(id)} type="item48br" tipType="item" active={filters[i]}/> }
            { count[id] > 1 && <div className={styles.count} data-count="true">x {count[id]}</div>}
            { !id && <div className={styles.noitems}>No<br />Items</div> }
          </React.Fragment>
        )}
      </div>
      <div className={styles.stats} style={{paddingTop:padding}}>
        <WinRate wr={Number(data[1]).toFixed(2)} />
        <div className={styles.pick}>{data[2]}</div>
        <div className={styles.games}>{data[3].toLocaleString()}</div>
      </div>
    </div>
  )
}

export default CellFilter