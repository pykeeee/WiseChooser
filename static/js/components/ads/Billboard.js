import React,{useEffect} from 'react'
import styles from './Billboard.module.css'


const Nitro = ({width,loading=false}) => {
  const show = width === 'medium' || width === 'large' || width === 'xlarge' ? true : false
  useEffect(() => {
    if (loading || window.location.hostname === "localhost" || typeof window.nads === 'undefined') return
    const nads = window.nads
    if (show) {
      nads.createAd('billboard', {
        "refreshLimit": 10, "refreshTime": 30, "renderVisibleOnly": false, "refreshVisibleOnly": true,
        "sizes": [["970","250"],["970","90"],["728","90"]]
      })
  }
  },[show,loading])
  return <>
    { show && <div id="billboard" className={styles.billboard}></div> }
  </>
}

export const Billboard = ({width,loading=false}) => {
  return <Nitro width={width} loading={loading} />
}

export default Billboard
