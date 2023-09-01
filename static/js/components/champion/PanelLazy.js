import { useRef }  from 'react'
import Panel from './Panel'
import useShow from '../hooks/useShow'
import styles from './PanelLazy.module.css'

export const PanelLazy = ({nav,data,width,type,title,title2,height=0}) => {
  const ref = useRef(null)
  const hasData = typeof data !=='undefined'
  const show = useShow(ref) && hasData
  return (
    <div className={styles[hasData ? 'panel' : '']} ref={ref} style={{minHeight: (hasData ? height : 0) +'px'}}>
        {show && <Panel width={width} nav={nav} data = {data} type={type} title={title} title2={title2}/> }
    </div>
  )
}
export default PanelLazy
