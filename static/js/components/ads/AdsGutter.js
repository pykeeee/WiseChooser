import {useEffect, useState} from 'react'
import styles from './AdsGutter.module.css'

export const Nitro = ({loading=false,width}) => {
  const [display,setDisplay] = useState(false)
  useEffect(() => {
    if (typeof window.nads === 'undefined') return
    if (window.location.hostname === "localhost") return
    if (loading) {
      if (display) setDisplay(false)
      return
    }
    if (!display) setDisplay(true)
  },[display,loading])

  useEffect(() => {
    if (!display) return 
    const nads = window.nads
    if (width==='big') { 
        nads.createAd('vbleft', {
        "refreshLimit": 10, "refreshTime": 30, "renderVisibleOnly": false, "refreshVisibleOnly": true,
        "sizes": [["300","600"],["160","600"],["300","250"]]
      })
      nads.createAd('vbright', {
        "refreshLimit": 10, "refreshTime": 30, "renderVisibleOnly": false, "refreshVisibleOnly": true,
        "sizes": [["300","600"],["160","600"],["300","250"]]
      })
    } else if (width==='small') { 
      nads.createAd('vleft', {
        "refreshLimit": 10, "refreshTime": 30, "renderVisibleOnly": false, "refreshVisibleOnly": true,
        "sizes": [["160","600"]]
      })
      nads.createAd('vright', {
        "refreshLimit": 10, "refreshTime": 30, "renderVisibleOnly": false, "refreshVisibleOnly": true,
        "sizes": [["160","600"]]
      })
    }
  },[display,width])
  return <>
    { width === 'big' && <><div id="vbleft" className={styles.bigleft}></div><div id="vbright" className={styles.bigright}></div></> }
    { width === 'small' && <><div id="vleft" className={styles.left}></div><div id="vright" className={styles.right}></div></>}
  </>
}

const AdsGutter = ({loading=false,width='none'}) => {
  return <Nitro loading={loading} width={width}/>
}

export default AdsGutter
