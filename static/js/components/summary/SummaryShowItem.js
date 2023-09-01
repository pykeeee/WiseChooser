import Item from '../images/Item'
import WinRate from '../misc/WinRate'
import styles from './SummaryShowItem.module.css'

export const SummaryShowItem = ({item}) => {
  return (
    <div className={styles.item}>
      {item && <><Item id={item.id} type="item32br" tipType="item"/>
      { item.n && <>
        <div className={styles.win}><WinRate wr ={item.wr.toFixed(2)} text="%"/></div>
        <div className={styles.pick}>{item.n.toLocaleString()}</div>
      </>} </> }
    </div>
  )
}

export default SummaryShowItem
