import ChampionLink from '../../links/ChampionLink'
import Item from '../../images/Item'
import styles from './Mythic.module.css'

export const Mythic = ({nav}) => {
  if (!nav.mythic) return ''
  return (
    <div className={styles.mythic}>
      <ChampionLink cid={nav.cid} lane={nav.lane} nav={nav}>
        <Item id={Number(nav.mythic)} type="item48br" /> 
      </ChampionLink>
      <div className={styles.clear}>X</div>
    </div>
  )
}

export default Mythic
