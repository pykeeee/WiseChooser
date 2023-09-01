import Tip from '../misc/Tip'
import Trans from '../misc/Trans'
import styles from './ItemSetSelector.module.css'

const ButtonGroup = ({buttons, active, handleClick,offset}) => <div className={styles.button}>
  { buttons.map((button,i) =>
    <div key={i+offset} className={i+offset === active ? styles['active']:'' } data-id={i+offset}
      onClick={ handleClick }>{button}</div> 
  )}
</div>

const one = <Trans trans="buttons::itemset::one" english="One" />
const pair = <Trans trans="buttons::itemset::pair" english="Pair" />
const triple = <Trans trans="buttons::itemset::triple" english="Triple" />
const quad = <Trans trans="buttons::itemset::quad" english="Quad" />
const quin = <Trans trans="buttons::itemset::quin" english="Quin" />
const full = <Trans trans="buttons::itemset::full" english="Full" />

const buttons1 = [one,pair,triple,quad,full]
const buttons2 = [pair,triple,quad,full]
const buttons3 = [one,pair,triple,quad,quin,full]
const buttons4 = [pair,triple,quad,quin,full]
const buttons = [buttons1,buttons2,buttons2,buttons3,buttons4,buttons4]
export const ItemSetSelector = ({active, handleClick}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.setheading}>With Boots</div>
      <div className={styles.setheadings}>
        <div><Trans trans="item::exactitemcount" english="Exact Item Count" /><Tip name="exactset" /></div>
        <div><Trans trans="item::actuallybuiltsets" english="Actually Built Sets" /><Tip name="builtset" /></div>
        <div><Trans trans="item::extrapolatedsets" english="Extrapolated Sets" /><Tip name="extrapolatedset" /></div>
        {[0,5,9,13,19,25].map((offset,i) =>
          <ButtonGroup key={i} buttons={buttons[i]} active={active} handleClick = {handleClick} offset={offset}/> )}
      </div>
    </div>
  )
}

export default ItemSetSelector