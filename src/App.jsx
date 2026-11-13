import { useEffect, useState } from 'react'
import './App.css'
import Checkin from './pages/Checkin.jsx'
import Graph from './pages/Graph.jsx'
import History from './pages/History.jsx'
import Navi from './components/Navi.jsx'


function getCurrentPage() {
  return window.location.hash.slice(2) || 'checkin'
}

function App() {
  const [checkins, setCheckins] = useState([])
  function addCheckin(checkin) {
    setCheckins((current) => [...current, checkin])
  }

  const [page, setPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleHashChange = () => setPage(getCurrentPage())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const pages = {
    checkin: <Checkin onAddCheckin={addCheckin} />,
    graph: <Graph checkins={checkins} />,
    history: <History checkins={checkins} />,
  }

  return (
    <>
      <Navi />
      {pages[page] ?? <Checkin onAddCheckin={addCheckin} />}
    </>
  )
}

export default App
