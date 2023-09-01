import Champ from '../images/Champ'
import LaneIcon from '../misc/LaneIcon'
import styles from './CircleSmall.module.css'

const CircleSmall = ({cid=false, lane}) => {
  return (
    <div className={styles.wrapper}>
      {cid && <Champ id={cid} type= "champ100c" toolTip={false}/> }
      <svg className={styles.border}>
        <circle cx="52" cy="52" r="52" stroke="#333" strokeWidth="2" fill="#111"></circle>
      </svg>
      <div className={styles.lane}>
        {<LaneIcon lane={lane} />}
      </div>
      <svg className={styles.laneborder}>
        <circle cx="23" cy="23" r="23" stroke="#333" strokeWidth="1" fill="#111"></circle>
      </svg>
    </div>
  )
}

export default CircleSmall
