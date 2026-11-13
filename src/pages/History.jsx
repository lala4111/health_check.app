

function History() {

  const data = [
    {id: 1, date: "2026-11-1", mood: "Very Happy", weather: "Sunny"},
    {id: 2, date: "2026-11-2", mood: "Very Happy", weather: "Sunny"}
  ]
  return (
    <>
    <main className="container py-4">
      <h1>History</h1>
      <table className = "table" border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead className="table-warning text-dark">
          <tr >
            <th scope = "col">Date</th>
            <th scope = "col">Mood</th>
            <th scope = "col">Weather</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>(
          <tr key = {item.id}>
            <td>{item.date}</td>
            <td>{item.mood}</td>
            <td>{item.weather}</td>
          </tr>))}
        </tbody>
      </table>

    </main>
    </>
  )
}

export default History