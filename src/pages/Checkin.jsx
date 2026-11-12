function Checkin() {
  return (
    <main className="container py-4">
      <h1>Welcome! Please check-in!</h1>
      <h3></h3>
      <br />
      <br />
      <h4>How do you feel about your day?</h4>
      <div className="mood_images">
        <img src="src/assets/sad.png" alt="sad picture"  />
        <img src="src/assets/little_sad.png" alt="little_sad picture" />
        <img src="src/assets/normal.png" alt="normal picture"/>
        <img src="src/assets/happy.png" alt="happy picture" />
        <img src="src/assets/very_happy.png" alt="very happy picture" />
      </div>

      
    </main>
  )
}

export default Checkin;