/* eslint-disable react/jsx-no-target-blank */
import ChampionName from '../misc/ChampionName'
import { champPath } from '../misc/Static'
import styles from './Resources.module.css'

const Resources = ({cid}) => {
  return (
    <div className={styles.champstats}>
        <h2><ChampionName cid={cid} /> Resources</h2>
        <p className={styles.title}>Pros.lol</p>
        <p>Check out the latest <a href={`https://pros.lol/champion/${champPath(cid)}/probuilds/`} target="_blank"><ChampionName cid={cid} /> Probuilds</a> from the worlds top pro players.</p>
        <p className={styles.title}>XDX.gg</p>
        <p>Lighting fast summoner profiles can be found at the new dedicated site <a href="https://xdx.gg" target="_blank">XDX.gg</a>.</p>
        <p className={styles.title}>Mobalytics</p>
        <p>Quality alternative <a href={`https://app.mobalytics.gg/lol/champions/${champPath(cid)}/build`} target="_blank"><ChampionName cid={cid} /> build stats</a> and more from our friends at Mobalytics.</p>
    </div>
  )
}

export default Resources
