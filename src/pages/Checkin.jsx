import Submission from "../components/Submission";
import { useState } from "react";
import Weather_Check from "../components/Weather_Check";
import happy from '../assets/happy.png';
import sad from '../assets/sad.png';
import little_sad from '../assets/little_sad.png';
import normal from '../assets/normal.png';
import very_happy from '../assets/very_happy.png';

const moodLabels = {
  1: "Very Sad 🤕",
  2: "Sad 😢",
  3: "Normal 🙂",
  4: "Happy 😀",
  5: "Very Happy 😄",
}

function Checkin({ onAddCheckin }) {
  const [submitYes, setSubmitted] = useState(false);
  const [mood, setMood] = useState(false);
  const [weather, setWeather] = useState("Unknown");

  function handleSubmit(){
    if (!mood) return

    const now = new Date()
    onAddCheckin({
      id: `${Date.now()}-${Math.random()}`,
      date: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`,
      mood,
      moodLabel: moodLabels[mood],
      weather,
    })
    setSubmitted(true)
  }

  return (
    <main className="container py-4">
      
      <h3></h3>
      <br />
      <br />
      
      {submitYes?(
      <>
       <Submission mood = {mood}/> 
       
      <button button type="button" className="btn btn-warning mt-3" onClick={() => window.location.hash = '/graph'}>Check in the graph</button>
      <button button type="button" className="btn btn-warning mt-3" onClick={() => setSubmitted(false)}>Return Home</button>
      </>) : 

      (
      <>
      <div>
        <h1>Welcome! Please check-in!</h1>
        <br />
        <Weather_Check onWeatherChange={setWeather} />
        <br />
        <h4>How do you feel about your day?</h4>
      </div>
      <div className="mood_images">
        <img src={sad} alt="sad picture"  onClick={() =>setMood(1)}/>
        <img src={little_sad} alt="little_sad picture" onClick={() =>setMood(2)}/>
        <img src={normal} alt="normal picture" onClick={() =>setMood(3)}/>
        <img src={happy} alt="happy picture" onClick={() =>setMood(4)} />
        <img src={very_happy} alt="very happy picture" onClick={() =>setMood(5)} />
      </div>
      </>
      )}
       
      {!submitYes && <button type="button" className="btn btn-primary btn-lg mt-3" id="submission" disabled={!mood} onClick={handleSubmit}>Submit</button>}

      
      
    </main>
  )
}

export default Checkin;