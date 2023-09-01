import WinRate from '../misc/WinRate'
import SkillPriority from './SkillPriority'
import styles from './SkillRow.module.css'

export const SkillRow = ({cid,row,pick,order}) => {
  if (!row) return ''
  return (
    <div className={styles.row}>
      <SkillPriority cid={cid} skills={row[0].toString()} order={order} />
      <div className={styles.win}>
        <WinRate wr={(row[1] ? row[2]/row[1]*100 : 0).toFixed(1)} />
      </div>
      <div>
        <div className={styles.pick}>{(row[1]/pick*100).toFixed(1)}</div>
        <div className={styles.games}>{row[1].toLocaleString()}</div>
      </div>
    </div>
  )
}

export default SkillRow
