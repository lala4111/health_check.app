import Submission from "../components/Submission";
import { useState } from "react";
import {useEffect} from "react";
import Weather_Check from "../components/Weather_Check";

function Checkin() {
  const [submitYes, setSubmitted] = useState(false);
  const [mood, setMood] = useState(false);


  return (
    <main className="container py-4">
      
      <h3></h3>
      <br />
      <br />
      
      {submitYes?(<Submission mood = {mood}/>) : 

      (
      <>
      <div>
        <h1>Welcome! Please check-in!</h1>
        <br />
        <Weather_Check/>
        <br />
        <h4>How do you feel about your day?</h4>
      </div>
      <div className="mood_images">
        <img src="src/assets/sad.png" alt="sad picture"  onClick={() =>setMood(1)}/>
        <img src="src/assets/little_sad.png" alt="little_sad picture" onClick={() =>setMood(2)}/>
        <img src="src/assets/normal.png" alt="normal picture" onClick={() =>setMood(3)}/>
        <img src="src/assets/happy.png" alt="happy picture" onClick={() =>setMood(4)} />
        <img src="src/assets/very_happy.png" alt="very happy picture" onClick={() =>setMood(5)} />
      </div>
      </>
      )}
       
      <button button type="button" className="btn btn-primary btn-lg mt-3" id = "submission"  onClick={() => setSubmitted(true)
      }>Submit</button>

      
      
    </main>
  )
}

export default Checkin;