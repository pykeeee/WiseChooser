import {useEffect, useState} from 'react'
import styles from './Rect.module.css'

const Nitro = ({width, loading=false}) => {
  const [display,setDisplay] = useState(false)
  const show = width === 'large' || width === 'xlarge' || width ==='medium' ? true : false
  useEffect(() => {
    if (!show) return
    if (typeof window.nads === 'undefined') return
    if (window.location.hostname === "localhost") return
    if (loading) {
      if (display) setDisplay(false)
      return
    }
    if (!display) setDisplay(true)
  },[display, show, loading])

  useEffect(() => {
    if (!display) return 
    const nads = window.nads
    nads.createAd('rect', {
      "refreshLimit": 10,
      "refreshTime": 60,
      "renderVisibleOnly": true,
      "refreshVisibleOnly": true,
      "sizes": [
        [
          "300",
          "250"
        ],
        [
          "336",
          "280"
        ]
      ]
    })
  },[display])

  return <>
    { show && <div className={styles.rect}>
      {!loading && <div id="rect"></div>}
    </div> }
  </>
}


export const Any = ({ width, loading=false}) => {
  return <Nitro width={width} loading={loading} />
}

export default Any
