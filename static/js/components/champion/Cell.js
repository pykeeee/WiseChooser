import ChampionLink from '../links/ChampionLink'
import ChampionVsLink from '../links/ChampionVsLink'
import Champ from '../images/Champ'
import Item from '../images/Item'
import Spell from '../images/Spell'
import WinRate from '../misc/WinRate'
import styles from './Cell.module.css'

export const Cell = ({ data,nav,type,vsLane }) => {
  if (type==='counter') {
    const counter = {type:'counter',cid:nav.cid,wr:Number(data[1]).toFixed(2),d1:Number(data[4]).toFixed(2),d2:Number(data[5]).toFixed(2)}
    return (
      <div className={styles.cell}>
        <ChampionVsLink cid={nav.cid} lane={nav.lane} vs={data[0]} vsLane={vsLane} nav={nav} >
          <Champ id={data[0]} type="champ48br" data={counter} />
        </ChampionVsLink>
        <WinRate wr={Number(data[1]).toFixed(2)} />
        <div className={styles.delta}>{data[4]}</div>
        <div className={styles.delta2}>{data[5]}</div>
        <div className={styles.pick}>{data[2]}</div>
        <div className={styles.games}>{data[3]}</div>
      </div>
    )
  }

  if (type==='synergy') {
    const synergy = {type:'synergy',cid:nav.cid,wr:Number(data[1]).toFixed(2),d1:Number(data[4]).toFixed(2)}
    return (
      <div className={styles.cell}>
        <ChampionLink cid={data[0]} lane={vsLane} nav={nav}>
          <Champ id={data[0]} type="champ48br" data={synergy} />
        </ChampionLink> 
        <WinRate wr={Number(data[1]).toFixed(2)} />
        <div className={styles.delta}>{Number(data[4]).toFixed(2)}</div>
        <div className={styles.delta2}>{data[5].toFixed(2)}</div>
        <div className={styles.pick}>{data[2]}</div>
        <div className={styles.games}>{data[3]}</div>
      </div>
    )
  }


  if (type==='mythic') {
    return (
      <div className={styles.cell}>
        <ChampionLink cid={nav.cid} lane={nav.lane} mythic={data[0]} nav={nav}>
          <Item id = {data[0]} type="item48br" tipType="item"/> 
        </ChampionLink> 
        <WinRate wr={Number(data[1]).toFixed(2)} />
        <div className={styles.pick}>{Number(data[2]).toFixed(2)}</div>
        <div className={styles.games}>{data[3].toLocaleString()}</div>
        <div className={styles.time}>{data[4] && data[4]}</div>
      </div>
    )
  }

  let spells = []
  if (type==='spells') {
    spells[0] = Number(data[0].split('_')[0])
    spells[1] = Number(data[0].split('_')[1])
    if (spells[1] ===6) spells = [spells[1],spells[0]]
    if (spells[1] ===4) spells = [spells[1],spells[0]]
  }
  return (
    <div className={styles.cell}>
      { type === 'spell' &&
        <Spell id = {data[0]} type="spell48br" tipType="spell"/> }
      { type === 'spells' &&<div className={styles.spells}>
          <Spell id = {spells[0]} type="spell48br" tipType="spell"/> 
          <Spell id = {spells[1]} type="spell48br" tipType="spell"/> 
        </div>
        }
      { ((type === 'item' || type === 'item2' || type === 'item3') && data[0] !==9999) &&
        <Item id = {data[0]} type="item48br" tipType="item"/> }
      { data[0] ===9999 && <div className={styles.noboots}>No<br/>Boots</div>}
      <WinRate wr={Number(data[1]).toFixed(2)} />
      <div className={styles.pick}>{Number(data[2]).toFixed(2)}</div>
      <div className={styles.games}>{data[3].toLocaleString()}</div>
      <div className={styles.time}>{data[4] && data[4]}</div>
    </div>
  )
}

export default Cell
