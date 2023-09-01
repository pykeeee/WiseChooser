import { useContext } from 'react'
import { TipContext } from '../../containers/TipContext'
import Tippy from '@tippyjs/react'
import styles from './Tip.module.css'

const Tip = ({ children, name,type='' }) => {
  const haveChild = children || children === 0 ? true : false
  const tips = useContext(TipContext)
  const tip = tips.tips && tips.tips[name] ? tips.tips[name] : 'Loading...'

  return (
    <Tippy content={<div className={styles.tip} dangerouslySetInnerHTML={{ __html: tip.replace(/\n/g, '<br />')}} />} onShow={()=>{if (!tips.showTips) tips.setShowTips(true)}}>
      <div className={styles[haveChild ? 'txt' : 'q'+type]}>{haveChild ? children : '?'}</div>
    </Tippy>
  )

}

export default Tip
