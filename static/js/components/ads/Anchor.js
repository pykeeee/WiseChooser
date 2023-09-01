import {useEffect, useState} from 'react'
const Nitro = ({width, loading=false}) => {
  const [display,setDisplay] = useState(false)
  const show = width === 'tiny' || width === 'xsmall' || width ==='small' ? true : false
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
    window['nitroAds'].createAd('anchor', {
      "refreshLimit": 10,
      "refreshTime": 90,
      "format": "anchor",
      "anchor": "bottom",
      "anchorPersistClose": false,
      "mediaQuery": "(min-width: 320px) and (max-width: 767px)"
    })
  },[display])

  return <></>
}

export const Anchor = ({ width, loading=false}) => {
  return <Nitro width={width} loading={loading} />
}

export default Anchor
