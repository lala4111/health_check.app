

function Navi() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#/checkin">
          Mental Health Check
        </a>
        <div className="navbar-nav">
          <a className="nav-link" href="#/checkin">
            Home / Check-in
          </a>
          <a className="nav-link" href="#/graph">
            Graph
          </a>
          <a className="nav-link" href="#/history">
            History
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navi