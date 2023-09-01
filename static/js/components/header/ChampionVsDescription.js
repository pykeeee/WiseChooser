import { champPath } from '../misc/Static'
import { setCanonical } from '../misc/Util'
import ChampionLinkName from '../links/ChampionLinkName'
import useChampionName from '../hooks/useChampionName'
import useTransMulti from '../hooks/useTransMulti'
import styles from './ChampionVsDescription.module.css'

const ChampionVsDescription = ({data,nav }) => {
  const { wr, delta1, delta2 } = data
  const { cid, vs, lane, defaultLane, vsLane = '', defaultVsLane, patch } = nav

  const championName = useChampionName(cid)
  const championVsName = useChampionName(vs)
  const loaded = typeof wr !=='undefined' ? true : false
  const laneName = loaded ? lane.charAt(0).toUpperCase() + lane.slice(1) : ''
  const vsLaneName = loaded ? vsLane.charAt(0).toUpperCase() + vsLane.slice(1) : ''
  const tr = useTransMulti([
    ['heading::matchupbuildrunes','Matchup Build & Runes'],['heading::countermatchupbuildrunes','Counter Matchup Build & Runes'],
    ['heading::buildrunes','Build & Runes'],['general::build','Build'],['general::guide','Guide'],
    ['general::patch','Patch'],['general::forpatch','for Patch'],['general::vs','vs'],['general::versus','versus']
  ])
  const cidvs = championName + ' ' + tr['general::vs'] +' '+ championVsName
  const cidvslane = championName + ' ' + laneName  + ' ' + tr['general::vs'] + ' ' + championVsName +' ' + vsLaneName

  document.title =  cidvs + ' ' + tr['general::build']
                    + ' - LoLalytics ' + championName + ' ' + laneName + ' ' + tr['general::vs'] +' '+ championVsName + ' ' + vsLaneName + ' '
                    + tr['heading::buildrunes']+ ' ' + tr['general::guide']

  const description = cidvs + ' ' + tr['general::build'] + ' - '
                     + 'LoLalytics has the best ' + cidvslane + ' ' + tr['heading::buildrunes'] + ' ' 
                     + ' ' + tr['general::guide'] + ' ' + tr['general::forpatch'] + ' ' + patch + '.'
                     + ' LoLalytics analyses millions of LoL matches on ' + tr['general::patch'] + ' ' + patch
                     + ' for the best ' + cidvslane + ' LoL guide.'

  document.getElementsByTagName("meta")[1].content = description
  let lanes =[]
  if (lane !== defaultLane) lanes.push('lane='+lane)
  if (vsLane !== defaultVsLane) lanes.push('vslane='+vsLane)

  setCanonical('https://lolalytics.com/lol/'+champPath(cid)+'/vs/' + champPath(vs) + '/build/'+(lanes.length ? '?'+lanes.join('&') : ''))

  return (
    <div className={styles.description}>
      <h1>{cidvs} { tr['general::build'] }</h1>
      <h2>{cidvslane} { tr['heading::buildrunes'] }</h2>
      { loaded && <p>
        <ChampionLinkName cid={cid} lane={lane} nav={nav} /> wins 
        against <ChampionLinkName cid={vs} lane={vsLane} nav={nav} /> {wr.toFixed(2)}% of the time which
        is {Math.abs(delta1).toFixed(2)}% {delta1>=0 ? 'higher' : 'lower'} against <ChampionLinkName cid={vs} lane={vsLane} nav={nav} /> than
        the average opponent. After normalising both champions win rates <ChampionLinkName cid={cid} lane={lane} nav={nav} /> wins 
        against <ChampionLinkName cid={vs} lane={vsLane} nav={nav} /> { Math.abs(delta2.toFixed(2)) }% {delta2.toFixed(2)>=0 ? 'more' : 'less'} often 
        than would be expected. Below is a detailed breakdown of the <ChampionLinkName cid ={cid} lane={lane} nav={nav} /> build & runes
        against <ChampionLinkName cid={vs} lane={vsLane} nav={nav} />.
      </p> }
    </div>
  )
}

export default ChampionVsDescription
