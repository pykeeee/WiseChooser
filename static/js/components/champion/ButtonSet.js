import styles from './ButtonSet.module.css'

export const ButtonSet = ({buttons, active, handleClick,offset=0}) => {
  return (
    <div className={styles.wrapper}>
      { buttons.map((button,i) =><div key={i} className={i+offset === active ? styles['active']:'' } data-id={i+offset} onClick={ handleClick }>{button}</div>)}
    </div>
  )
}

export default ButtonSet
