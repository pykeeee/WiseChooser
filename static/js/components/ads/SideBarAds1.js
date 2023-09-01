import { useEffect } from 'react'
import styles from './SideBarAds1.module.css'

const Nitro = ({loading=false}) => {
  useEffect(() => {
    if (loading || window.location.hostname === "localhost" || typeof window.nads === 'undefined') return
    const nads = window.nads
    nads.createAd('sidebar1', {
      "refreshLimit": 10,"refreshTime": 30,"renderVisibleOnly": true,"refreshVisibleOnly": true,
      "sizes": [[300,250],[160,600],[300,600]]
    })
  },[loading])
  return <div id="sidebar1" className={styles.sidebar}></div>
}

export const SideBarAds1 = ({width, loading=false}) => {
  return (
    <>
      { (width ==='xlarge' || width ==='large') && <Nitro loading={loading} /> }
    </>
  )
}

export default SideBarAds1
