import Tip from '../misc/Tip'
import Trans from '../misc/Trans'
import styles from './ChampionStats.module.css'

const ChampionStats = ({data}) => {
  return (
    <div className={styles.stats}>
        <div>
          <div>{data.wr.toFixed(2)}%</div>
          <Trans trans="general::winrate" english="Win Rate"/>
        </div>
          <div>
            <div>{data.rank} / {data.rankTotal}</div>
            <Trans trans="general::rank" english="Rank"/>
          </div>
          <div>
            <div>{data.tier}</div>
            <Trans trans="general::tier" english="Tier"/>
            <Tip name="tier" />
          </div>
          <div>
            <div>{data.pr.toFixed(2)}%</div>
            <Trans trans="general::pickrate" english="Pick Rate"/>
          </div>
          { data.br>0 && <div>
            <div>{data.br.toFixed(2)}%</div>
            <Trans trans="general::banrate" english="Ban Rate"/>
            </div> }
          <div>
            <div>{data.n.toLocaleString()}</div>
            <Trans trans="general::games" english="Games"/>
        </div>
    </div>
  )
}

export default ChampionStats
