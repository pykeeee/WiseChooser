import { useState, useRef } from 'react'
import Panel from './Panel'
import PanelFilter from './PanelFilter'
import useShow from '../hooks/useShow'
import styles from './SetSingle.module.css'

export const SetSingle = ({width, height, set,setType,one,oneType,defaultSingle=false,title,filter=false}) => {
  const ref = useRef(null)
  const show = useShow(ref)
  let def = set ? false : true
  if(set && defaultSingle) def = !def;
  const [single,setSingle] = useState(def)
  const handleClick = (e) => setSingle(!single)
  return (
    <div className={styles.panel} ref={ref} style={{minHeight: (single === defaultSingle ? height : 0) +'px'}}>
      { show && <>
        { !single && !filter && set && <Panel width={width} data={set} type={setType} title={title} />}
        { !single && filter && set && <PanelFilter width={width} data={set} type={setType} title={title} />}
        { single && one && <Panel width={width} data={one} type={oneType} title={title} />}
        { set && <div className={styles['toggle'+(single ? oneType : setType)]} onClick={ handleClick }>{single ? 'Set' : 'Single'}</div>}
      </> }
    </div>
  )
}

export default SetSingle
