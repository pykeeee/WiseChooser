import ChampionLink from '../links/ChampionLink'
import ChampionName from '../misc/ChampionName'
import Elo from '../misc/Elo.js'
import RegionIcon from '../misc/RegionIcon'
import { summonerURL } from '../misc/Util'
import styles from './TopList.module.css'

const TopList = ({top,cid,nav}) => {
  if (!top) return ''
  return (
    <div className={styles.toplist}>
        <h2><ChampionName cid={cid} /> Leaderboard</h2>
        <table><thead><tr><th> </th><th> </th><th>Name</th><th>Win</th><th>Games</th></tr></thead><tbody>
        { top.map((row,i) => <tr key={i}>
            <td>{row[0]}</td>
            <td>
              <Elo tier={row[5]} division={row[6]} />
            </td>
            <td><a href={summonerURL(row[2],row[1])}>{row[1]}</a></td>
            <td>{Math.round(row[3])}%</td><td>{row[4]}</td>
            <td>
              <RegionIcon region={row[2]} />{row[2].toUpperCase()}
            </td>
          </tr>
        )}
        </tbody></table>
        <ChampionLink cid={cid} page="leaderboard" nav={nav} >Click For Full <ChampionName cid={cid} /> Leaderboard</ChampionLink>
    </div>
    )
}

export default TopList
