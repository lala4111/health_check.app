import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  
return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Mental Health Check</a>
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="src/pages/Checkin.jsx">Home/ CheckIn 
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="src/pages/Graph.jsx">Graph</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="src/pages/History.jsx">History</a>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
  )
}



export default App
