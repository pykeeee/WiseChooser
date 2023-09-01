import SkillOrder from '../skills/SkillOrder'
import SummaryHeading from './SummaryHeading'
import SummaryWinRate from './SummaryWinRate'

export const SummarySkillOrder = ({cid, order}) => {
  return (
    <div>
      { order.id && <>
        <SummaryHeading heading={{trans:'skill::skillorder',english:'Skill Order',tip:'skillorder'}} />
        <SkillOrder skills={order.id} cid={cid} />
        <SummaryWinRate wr={order.wr} games={order.n} inline={true} />
      </> }
  </div>
  )
}

export default SummarySkillOrder
