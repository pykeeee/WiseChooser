import Trans from '../misc/Trans'
import styles from './SkillTableHeading.module.css';

export const SkillTableHeading = ({order}) => {
  return (
    <div className={styles.heading}>
      <div className={styles.title}>{order === true ? <Trans trans="skill::skillpriority" english="Skill Priority"/> : <Trans trans="skill::skillorder" english="Skill Order"/>}</div>
      <div className={styles.win}><Trans trans="general::win" english="Win" maxChars={6}/></div>
      <div className={styles.pick}><Trans trans="general::pick" english="Pick" maxChars={6}/></div>
    </div>
  )
}

export default SkillTableHeading
