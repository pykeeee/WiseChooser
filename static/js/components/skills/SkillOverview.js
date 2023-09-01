import EarlySkills from './EarlySkills'
import SkillsTable from './SkillsTable'
import styles from './SkillOverview.module.css';

const SkillOverview = ({width,cid, early,skills,pick6,pick10}) => {

  return (
    <div className={styles[width==='tiny' || width==='xsmall' ? 'small' : 'big']}>
      <SkillsTable cid={cid} skills={skills} pick={pick10} order={true} />
      <EarlySkills cid={cid} early={early} pick6={pick6} />
    </div>
  )
}

export default SkillOverview
