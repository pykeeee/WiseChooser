import ChampionName from '../misc/ChampionName'
import ChampionLink from '../links/ChampionLink'

const ChampionLinkName = ({ cid, lane=false, nav }) => {
  return (
    <ChampionLink cid={cid} lane={lane} nav={nav} >
      <ChampionName cid={cid} />
    </ChampionLink>
  )
}


export default ChampionLinkName
