import { BrowserRouter as Router } from 'react-router-dom'
import { LangContextProvider } from './LangContext'
import { OPContextProvider } from './OPContext'
import { TipContextProvider } from './TipContext'
import URoute from './URoute'

import './App.css'

const App = () => {
  return (
    <Router basename="/">
      <OPContextProvider>
        <LangContextProvider>
          <TipContextProvider>
            <URoute />            
          </TipContextProvider>
        </LangContextProvider>
      </OPContextProvider>
    </Router>
  )
}


export default App
