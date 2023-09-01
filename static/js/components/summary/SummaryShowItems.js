import React from 'react'
import AngleRightIcon from '../icons/AngleRightIcon'
import SummaryShowItem from './SummaryShowItem'
import styles from './SummaryShowItems.module.css'

const SummaryShowItems = ({items,core=false}) => {
  return (
    <div className={styles.items}>
    { items && items.map((item,i)=><React.Fragment key={i}>
        <SummaryShowItem item={item} />
        {i<items.length-1 && <>
        { core && <div className = {styles.skillnext}> <AngleRightIcon /> </div>}
        { !core && <div className= {styles.or}> OR </div>}
        </>}
      </React.Fragment>
    )}
    </div>
  )
}

export default SummaryShowItems
