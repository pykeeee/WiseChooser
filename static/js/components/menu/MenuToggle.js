import styles from './MenuToggle.module.css'

const MenuToggle = ({active,handleClick}) => {
  return (
    <div className={styles.toggle}>
      <div className={styles[active ? 'active' : 'inactive']} onClick={handleClick}>
        <div className={styles.menuicon}>
          <span className={styles.lineleft}></span>
          <span className={styles.line}></span>
          <span className={styles.lineright}></span>
        </div>					
      </div>
    </div>
  )
}

export default MenuToggle
