import Loading from './Loading'
import styles from './Loader.module.css'

export const Loader = () =>{
  return(
    <div className={styles.inner}>
      <Loading />
    </div>
  )
}

export default Loader
