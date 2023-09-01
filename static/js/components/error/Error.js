import { Link, Navigate } from 'react-router-dom'
import { champPath } from '../misc/Static'
import Background from '../misc/Background'
import Loading from '../misc/Loading'
import NavBar from '../navbar/NavBar'
import styles from './Error.module.css'
export const Error = ({type,nav,width}) => {
  if (type ==='nochamp') return (
    <div className={styles.inner} >
      <br /><br /><br />
      <center>
        <h3>Invalid Champion Name!</h3><br />
        <h3><Link to={{pathname:'/'}}>Click HERE to Return Home</Link></h3>
      </center>
    </div>
  )

  if (type ==='loading') return (
    <>
      <NavBar nav={nav} analysed={0} averageWR={0} width={width} />
      <div className={styles.inner} >
        { nav.cid && <Background cid={nav.cid}/> }
        <Loading/>
      </div>
    </>
  )

  if (type ==='nodata') return (
    <>
      <NavBar nav={nav} analysed={0} averageWR={0} width={width} />
      <div className={styles.inner}>
        <br /><br /><br />
        <center>
          <h3>No data available for selected parameters!</h3>
          <h3>Please alter your selection.</h3>
        </center>
      </div>
    </>
  )

let location = window.location.href.split('/')
let champion = location.pop()
if (!champion) champion = location.pop()
if (champion ==='Top' || champion === 'Jungle' || champion === 'Middle' || champion === 'ADC' || champion === 'Support') champion = location.pop()
champion = champion.toLowerCase().replace(/\s/g, "")

if (champPath[champion]) return <Navigate to={{ pathname: `/lol/${champion}/`, search: '' }} />

  return (
    <div className={styles.inner} >
      <br /><br />
      <center>
        <h3>404 Page Not Found</h3><br />
        <h3><Link to={{pathname:'/'}}>Click HERE to Return Home</Link></h3>
      </center>
    </div>
  )
}

export default Error
