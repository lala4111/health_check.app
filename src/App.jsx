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
  const [page, setPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleHashChange = () => setPage(getCurrentPage())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const pages = {
    checkin: <Checkin />,
    graph: <Graph />,
    history: <History />,
  }

  return (
    <>
      <Navi />
      {pages[page] ?? <Checkin />}
    </>
  )
}

export default App
