import { Suspense, lazy} from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/misc/Loader'
import Wrapper from './Wrapper'

const Blog = lazy(() => import('../pages/Blog'))
const Champion = lazy(() => import('../pages/Champion'))
const Counters = lazy(() => import('../pages/Counters'))
const Draft = lazy(() => import('../pages/Draft'))
const Front = lazy(() => import('../pages/Front'))
const Leaderboard = lazy(() => import('../pages/Leaderboard'))
const PatchNotes = lazy(() => import('../pages/PatchNotes'))
const TierList = lazy(() => import('../pages/TierList'))

const URoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />} >
        <Route path="/lol/tierlist/:mode/*" element={<Suspense fallback={<Loader placeholder={true}/>}><TierList /></Suspense>} />
        <Route path="/lol/tierlist/*" element={<Suspense fallback={<Loader placeholder={true}/>}><TierList /></Suspense>} />
        <Route path="/lol/draft/:champ1/:champ2/:champ3/:champ4/:champ5/vs/:champ6/:champ7/:champ8/:champ9/:champ10/" element={<Suspense fallback={<Loader placeholder={true}/>}><Draft /></Suspense>} />
        <Route path="/lol/draft/*" element={<Suspense fallback={<Loader placeholder={true}/>}><Draft /></Suspense>} />
        <Route path="/lol/leaderboard/*" element={<Suspense fallback={<Loader placeholder={true}/>}><Leaderboard /></Suspense>} />
        <Route path="/lol/patchnotes/:mode/*" element={<Suspense fallback={<Loader placeholder={true}/>}><PatchNotes /></Suspense>} />
        <Route path="/lol/patchnotes/*" element={<Suspense fallback={<Loader placeholder={true}/>}><PatchNotes /></Suspense>} />
        <Route path="/lol/:champion/vs/:vschampion/build/*" element={<Suspense fallback={<Loader placeholder={true}/>}><Champion /></Suspense>} />
        <Route path="/lol/:champion/:mode/build/*" element={<Suspense fallback={<Loader placeholder={true}/>}><Champion /></Suspense>} />
        <Route path="/lol/:champion/counters/*" element={<Suspense fallback={<Loader placeholder={true}/>}><Counters /></Suspense>} />
        <Route path="/lol/:champion/leaderboard/*" element={<Suspense fallback={<Loader placeholder={true}/>}><Leaderboard /></Suspense>} />
        <Route path="/lol/:champion/build/*" element={<Suspense fallback={<Loader placeholder={true}/>}><Champion /></Suspense>} />
        <Route path="/blog/:article/" element={<Suspense fallback={<Loader placeholder={true}/>}><Blog /></Suspense>} />
        <Route path="/info/:article/" element={<Suspense fallback={<Loader placeholder={true}/>}><Blog /></Suspense>} />
        <Route path="/:mode/*" element={<Suspense fallback={<Loader placeholder={true}/>}><Front /></Suspense>} />
        <Route index element={<Suspense fallback={<Loader placeholder={true}/>}><Front /></Suspense>} />
        </Route>
    </Routes>
  )
}

export default URoute
