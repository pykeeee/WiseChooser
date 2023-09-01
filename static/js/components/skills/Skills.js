import { useState, useRef } from 'react'
import ButtonSet from '../champion/ButtonSet'
import SkillOverview from './SkillOverview'
import SkillsTable from './SkillsTable'
import Trans from '../misc/Trans'
import useShow from '../hooks/useShow'
import styles from './Skills.module.css';

export const Skills = ({cid, data, width}) => {
  const ref = useRef(null)
  const show = useShow(ref)
  const [page,setPage] = useState(0)
  const types=['skill6','skill10','skill15']
  const handleClick = (e) => setPage(parseInt(e.target.getAttribute('data-id')))
  const level = <Trans trans="buttons::skills::level" english="Level"/>

  const size = width==='tiny' || width==='xsmall' ? 'small' : 'big'

  return (
    <div ref={ref} className={styles[show ? '' : 'placeholder'+size]}>
      { show && data && <>
        <ButtonSet buttons = {[<Trans trans="buttons::skills::overview" english="Overview"/>,<>{level} 6+</>,<>{level} 10+</>,<>{level} 15+</>]} active={page} handleClick={handleClick} />
        <div className={styles.panel}>
          { page === 0 && <SkillOverview width={width} cid={cid} early={data.skillEarly} skills={data.skillOrder} pick6={data.skill6Pick} pick10={data.skill10Pick} /> }
          { page > 0 && <SkillsTable cid={cid} skills={data[types[page-1]]} pick={data[types[page-1]+'Pick']} order={false}/> }
        </div>
      </> }
    </div>
  )
}

export default Skills
