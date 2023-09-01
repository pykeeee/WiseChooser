import SkillRow from './SkillRow'
import SkillTableHeading from './SkillTableHeading'
import styles from './SkillsTable.module.css'

const SkillsTable = ({cid, skills, pick, order}) => {
  return (
    <div className={styles.skillstable}>
      <SkillTableHeading order={order} />
      <div className={styles.data}>
        { skills && skills.slice(0,20).map((row,i) =>
          <SkillRow key={i} cid={cid} row={row} pick={pick} order={order} /> )
        }
      </div>
    </div>
  )
}

export default SkillsTable
