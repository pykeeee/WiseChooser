import ChampionName from '../misc/ChampionName'
import styles from './Stats.module.css'

const Stats = ({stats,count,cid}) => {
  return (
    <div className={styles.champstats}>
        <h2><ChampionName cid={cid} /> Stats</h2>
        { stats.map((row,i) => 
          <div key={i}>
            <div>{row[1]}:</div>
            <div>
              <div>{row[3].toLocaleString()}</div>
              <div style={{width:`${row[4]}%`}}></div>
            </div>
            <div>{ row[5]  + ' / '+ count }</div>
          </div>
        )}
    </div>
  )
}

export default Stats
