import Skill from '../images/Skill'
import styles from './SkillList.module.css'

const SkillList = ({cid}) => {
  return (
    <div className={styles.wrapper}>
      <Skill cid={cid} id="p" type="skill30" />
      <Skill cid={cid} id="q" type="skill30" />
      <Skill cid={cid} id="w" type="skill30" />
      <Skill cid={cid} id="e" type="skill30" />
      <Skill cid={cid} id="r" type="skill30" />
    </div>
  )
}

export default SkillList