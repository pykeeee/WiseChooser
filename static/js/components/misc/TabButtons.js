import ChampionLink from '../links/ChampionLink'
import ChampionVsLink from '../links/ChampionVsLink'
import Trans from '../misc/Trans'
import { champPath} from '../misc/Static'
import useChampionName from '../hooks/useChampionName'
import styles from './TabButtons.module.css'

const TabButtons = ({nav, tab, cid, lane, width }) => {
  const champName = useChampionName(cid)
  const champVsName = useChampionName(nav.vs)
  const championName = champName + ' '
  const championVs = champName + ' vs ' + champVsName + ' '
  if (cid < 1) return <></>
  return (
    <>
      <div className={styles.buttons}>
        <div className={tab ===0 ? styles.active : ''}>
          {!nav.vs && <ChampionLink cid={nav.cid} lane={lane !==nav.defaultLane ? lane : false} nav={nav}>{championName}<Trans trans="tabs::main::build" english="Build"/></ChampionLink>}
          { nav.vs>0 && <ChampionVsLink cid={nav.cid} vs={nav.vs} lane={lane !==nav.defaultLane ? lane : false} vsLane={nav.vsLane !==nav.defaultVsLane ? nav.vsLane : false} nav={nav} >
            {championVs}<Trans trans="tabs::main::build" english="Build"/>
            </ChampionVsLink> }
        </div>
        <div className={tab ===1 ? styles.active  : ''} >
          <ChampionLink cid={nav.cid} page="leaderboard" nav={nav}>{championName}<Trans trans="tabs::main::leaderboard" english="Leaderboard"/></ChampionLink>
        </div>
        { (!nav.mode || nav.mode ==='ranked') &&
          <div className={tab ===2 ? styles.active  : ''} >
            <ChampionLink cid={nav.cid} lane={lane} page="counters" nav={nav}>{championName} <Trans trans="tabs::main::counters" english="Counters"/></ChampionLink>
          </div>
        }
        <div>
          <a href ={`https://pros.lol/champion/${champPath(nav.cid)}/probuilds/`}>{championName} <Trans trans="tabs::main::probuilds" english="Probuilds"/></a>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  )
}
export default TabButtons
