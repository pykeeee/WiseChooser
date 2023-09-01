import styles from './Wrapper.module.css'

const Wrapper =  ({width,children}) => {
  return (
    <div className={styles[width]}>{children}</div>
  )
}

export default Wrapper
