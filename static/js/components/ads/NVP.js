import {useEffect, useState} from 'react'

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
    nads.createAd('nvp', {
      "format": "video-nc",
      "mediaQuery": "(min-width: 1025px), (min-width: 768px) and (max-width: 1024px)",
      "video": {
        "float": "always",
        "mobile": "compact",
        "hidePlaylist": true
      }
    })
  },[display])

  return <>
    { show && !loading && <div id="nvp"></div>}
  </>
}


export const NVP = ({ width, loading=false}) => {
  return <Nitro  width={width} loading={loading} />
}

export default NVP
