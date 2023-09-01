import ChampionName from '../misc/ChampionName'
import styles from './TopStats.module.css'

const TopStats = ({cid,stats}) => {
  return (
    <div className={styles.topstats}>
        <h2>Best on <ChampionName cid={cid} /><br />Last 7 Day Performance</h2>
        <h1>{stats.topwin}% Win Rate</h1>
        <p>Analyzing<strong> {stats.toppick.toLocaleString()} </strong>
        games played by the top
        <strong> {stats.topcount} </strong>
        <ChampionName cid={cid} /> players worldwide over the last 7 days.
        The average rank of these top <ChampionName cid={cid} /> players was <strong>{stats.topelo}</strong>.</p>
      <p>Taking into account win rate and summoner rank <ChampionName cid={cid} /> is
      ranked <strong>{stats.toprank}</strong> amongst all champions in the hands of an expert.</p>
      <p>Maximum 50 summoners are used per region with a minimum of Diamond IV
        and 50 games played on <ChampionName cid={cid} /> to be eligible.</p>
    </div>
    )
}

export default TopStats;
