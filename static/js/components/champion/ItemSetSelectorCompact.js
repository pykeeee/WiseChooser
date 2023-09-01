import { useState } from 'react'
import Tip from '../misc/Tip'
import Trans from '../misc/Trans'
import styles from './ItemSetSelectorCompact.module.css'

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

const buttons = [buttons1,buttons3,buttons2,buttons4,buttons2,buttons4]


const sets= [[0,13],[5,19],[9,25]]

export const ItemSetSelector = ({active, handleClick}) => {
  const [activeType,setActiveType] = useState(1)

  const clickType = (e) => {
    if(e.target.getAttribute('data-id') !== null) {
      setActiveType(parseInt(e.target.getAttribute('data-id')))
    }
  }

  return (
    <div className={styles.panel}>
      <div className={styles.types}>
        <div></div>
        <div className={styles['typebutton'+(activeType === 0 ? 'active' : '')]} onClick={clickType} data-id="0"><Trans trans="item::exact" english="Exact" /><Tip name="exactset" /></div>
        <div className={styles['typebutton'+(activeType === 1 ? 'active' : '')]} onClick={clickType} data-id="1"><Trans trans="item::built" english="Built" /><Tip name="builtset" /></div>
        <div className={styles['typebutton'+(activeType === 2 ? 'active' : '')]} onClick={clickType} data-id="2"><Trans trans="item::extrapolated" english="Extrapolated" /><Tip name="extrapolatedset" /></div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.heading}>With Boots</div>
        <div>
          {sets[activeType].map((offset,i) =>
            <ButtonGroup key={i} buttons={buttons[activeType*2+i]} active={active} handleClick = {handleClick} offset={offset}/> )}
        </div>
      </div>
    </div>
  )
}

export default ItemSetSelector
