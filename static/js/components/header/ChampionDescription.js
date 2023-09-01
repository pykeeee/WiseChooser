import { champPath, queueSetting } from '../misc/Static'
import { setCanonical } from '../misc/Util'
import CircleBig from '../champion/CircleBig'
import ChampionName from '../misc/ChampionName'
import ChampionLink from '../links/ChampionLink'
import ChampionLinkName from '../links/ChampionLinkName'
import ChampionVsLinkName from '../links/ChampionVsLinkName'
import Keystone from '../navbar/keystone/Keystone'
import Mythic from '../navbar/mythic/Mythic'
import TierListLink from '../links/TierListLink'
import TierName from '../misc/TierName'
import useChampionName from '../hooks/useChampionName'
import useTransMulti from '../hooks/useTransMulti'
import styles from './ChampionDescription.module.css'

const ChampionDescription = ({width, data,nav}) => {
  const { wr, lane, topWin, topElo, counters } = data
  const { cid, defaultLane, mode, patch } = nav
  const settings = queueSetting(mode)
  const championName = useChampionName(cid)
  const loaded = typeof lane !=='undefined' ? true : false 
  const laneName = loaded && mode ==='ranked' ? lane.charAt(0).toUpperCase() + lane.slice(1) : ''
  const modeName = settings.title
  const tr = useTransMulti([['heading::buildrunescounters','Build, Runes & Counters'],['general::patch','Patch'],
                            ['general::build','Build'],['general::guide','Guide'],
                            ['general::forpatch','for Patch'],['general::vs','vs'],['general::versus','versus']])

  document.title  = championName + (modeName ? ' ' + modeName : '') + ' ' + tr['general::build'] 
                    + ' - LoLalytics ' + championName
                    + (mode==='ranked' ? ' ' + laneName : '')  + (modeName? ' '+ modeName : '') + ' '  + tr['heading::buildrunescounters']
                    + ' ' + tr['general::guide']

  const description = championName + (modeName ? ' ' + modeName : '') + ' ' + tr['general::build'] + ' - '
                     + 'LoLalytics has the best ' + championName 
                     + (mode==='ranked' ? ' ' + laneName : '')  + (modeName? ' '+ modeName : '') + ' ' + tr['heading::buildrunescounters'] + ' ' 
                     + ' ' + tr['general::guide'] + ' ' + tr['general::forpatch'] + ' ' + patch + '.'
                     + ' LoLalytics analyses millions of LoL matches on ' + tr['general::patch'] + ' ' + patch
                     + ' for the best ' + championName + ' LoL guide.'

  setCanonical('https://lolalytics.com/lol/'+champPath(cid)+'/'+(mode !=='ranked' ? mode+'/' : '')+'build/'+(mode==='ranked' && lane !== defaultLane ? '?lane='+lane : ''))
  document.getElementsByTagName("meta")[1].content = description

  return (
    <div className={styles.description}>
      { (width==='tiny' || width === 'xsmall') && <div className={styles.champ}>
        <CircleBig cid={cid} lane={lane} tier={data.tier}/>
          {nav.mythic>0 && <div className={styles.mythic}>Mythic<Mythic nav={nav} /></div> }
          {nav.keystone>0 && <div className={styles.keystone}>Keystone<Keystone nav={nav} /></div> }
      </div> }
      <h1>{ championName + (modeName ? ' ' + modeName : '') } Build</h1>
      <h2>{championName} {mode ==='ranked' ? laneName : modeName } { tr['heading::buildrunescounters'] }</h2>
      { loaded && <p>
        <ChampionLinkName cid={cid} lane={lane} nav={nav} />{ settings.title ? ' '+settings.title : ''} {mode ==='ranked' && <> {lane}</>} has a {wr}% win
        rate in <TierName tier={nav.tier} /> on
        Patch {nav.patch} { data.rank>0 && <>coming in at rank {data.rank} of {data.rankTotal} and
        graded {data.tier} Tier on 
        the <TierListLink nav={nav}>LoL Tierlist</TierListLink></> }. { counters && <>
        <ChampionName cid={cid} /> {mode ==='ranked' && lane} is
        a strong counter to<> </>
        <ChampionVsLinkName cid={cid} vs={counters.strong[0]} lane={lane} vsLane={lane} nav={nav} />,<> </>
        <ChampionVsLinkName cid={cid} vs={counters.strong[1]} lane={lane} vsLane={lane} nav={nav} /> &<> </>
        <ChampionVsLinkName cid={cid} vs={counters.strong[2]} lane={lane} vsLane={lane} nav={nav} /><> </>
        while <ChampionName cid={cid} /> is countered most by<> </>
        <ChampionVsLinkName cid={cid} vs={counters.weak[0]} lane={lane} vsLane={lane} nav={nav} />,<> </>
        <ChampionVsLinkName cid={cid} vs={counters.weak[1]} lane={lane} vsLane={lane} nav={nav} /> &<> </>
        <ChampionVsLinkName cid={cid} vs={counters.weak[2]} lane={lane} vsLane={lane} nav={nav} />. The 
        best <ChampionName cid={cid} /> players have a {topWin}% win rate with an average rank of {topElo} on 
        the <ChampionLink cid={cid} page="leaderboard" nav={nav}><ChampionName cid={cid} /> Leaderboard</ChampionLink>. </>}
        Below is a detailed breakdown of the <ChampionName cid={cid} /> build, runes & counters.
      </p> }
    </div>
  )
}

export default ChampionDescription
