import { useEffect } from 'react'
import styles from './Loading.module.css'

export const Loading = () =>{
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <>
      <div className={styles.loading}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </>
  )
}

export default Loading
