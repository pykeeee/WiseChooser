import Trans from '../misc/Trans'
import styles from './ChampionVsStats.module.css'

const ChampionStats = ({data}) => {
  return (
    <div className={styles.stats}>
      <div>
        <div>{data.wr.toFixed(2)}%</div>
        <Trans trans="general::winrate" english="Win Rate"/>
      </div>
      <div>
        <div>{data.n.toLocaleString()}</div>
        <Trans trans="general::games" english="Games"/>
      </div>
    </div>
  )
}

export default ChampionStats
