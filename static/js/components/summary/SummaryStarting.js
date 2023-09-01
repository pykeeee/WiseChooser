import Item from '../images/Item'
import SummaryWinRate from './SummaryWinRate'
import styles from './SummaryStarting.module.css'

export const SummaryStarting = ({start,startSet,startCount}) => {
  return (
    <div className={styles.startitems}>
      { start && <>
        <div className={styles.starting}>
          { startSet.length>0 && startSet.map((id,i)=>
            <div className={styles.item} key={i}>
              <Item id={id} type="item32br" tipType="item"/>
              {startCount[id]>1 && <div className={styles.count}>x {startCount[id]}</div>}
            </div> )}
        </div>
        <SummaryWinRate wr={start.wr} games={start.n} inline={true} />
      </> }
  </div>
  )
}

export default SummaryStarting
