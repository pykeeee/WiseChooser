import Champ from '../images/Champ'
import styles from './NavChamp.module.css'

const NavChamp = ({cid,title = ''}) => 
  <div className={styles.wrapper}>
    {cid>0 && <Champ id={cid} type='champ37br' toolTip={false} /> }
    {!cid && <div className={styles.placeholder}></div>}
    <center>{ title }</center>
  </div> 

export default NavChamp
