

function History({ checkins }) {
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
          {checkins.map((item) =>(
          <tr key = {item.id}>
            <td>{item.date}</td>
            <td>{item.moodLabel}</td>
            <td>{item.weather}</td>
          </tr>))}
        </tbody>
      </table>

    </main>
    </>
  )
}

export default History