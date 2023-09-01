import { Link } from 'react-router-dom'
import Wrapper from '../misc/Wrapper'
import useWidth from '../hooks/useWidth'
import styles from './Footer.module.css'

export const Footer = () => {
  const w = useWidth()
  const width = w.size
  return (
    <div className={styles.footer}>
      <Wrapper width={width} >
        <span data-ccpa-link="1"></span>
        <Link to="/info/faq/">FAQ</Link>
        <Link to="/info/Privacy/">Privacy</Link>
        <Link to="/info/Advertise_On_LoLalytics/">Advertise</Link>
      </Wrapper>
    </div>
  )
}

export default Footer
