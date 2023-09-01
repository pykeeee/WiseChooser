import FilterCell from './FilterCell'
import styles from './Filter.module.css'

export const Filter = ({ data=[], handleClick,excluded }) => {
  if (!data.length) return <></>
  return (
    <div className={styles.panel}>
      <div>{excluded.length >0 && <div className={styles.clear} onClick={handleClick} data-id="clear">X</div>}</div>
      <div className={styles.data} >
        { data.length && data.map((cell, i)=><FilterCell key={i} data={cell} handleClick={handleClick} excluded={excluded.indexOf(cell[0]) >= 0} />) }
      </div>
    </div>
  )
}

export default Filter
