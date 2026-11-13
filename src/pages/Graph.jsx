import Graph_Visualization from '../components/Graph_visualization.jsx'
function Graph({ checkins }) {
  return (
    <main className="container py-4">
      <h1>Graph</h1>
      <h3>Here is the graph of how your mood changes</h3>
      <br />
      <div className = "d-flex justify-content-center">
        <Graph_Visualization checkins={checkins} />

      </div>
      
      
    </main>
  )
}

export default Graph