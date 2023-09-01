import SkillPriority from '../skills/SkillPriority'
import SummaryHeading from './SummaryHeading'
import SummaryWinRate from './SummaryWinRate'

export const SummaryPriority = ({cid, priority}) => {
  return (
    <div>
      { priority.id && <>
        <SummaryHeading heading={{trans:'skill::skillpriority',english:'Skill Priority',tip:'skillpriority'}} />
        <SkillPriority cid={cid} skills ={ priority.id } order={true}/>
        <SummaryWinRate wr={priority.wr} games={priority.n} inline={true} />
      </> }
  </div>
  )
}

export default SummaryPriority
