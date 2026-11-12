import Submission from "../components/Submission";
import { useState } from "react";
import {useEffect} from "react";
import Weather_Check from "../components/Weather_Check";

function Checkin() {
  const [submitYes, setSubmitted] = useState(false);


  return (
    <main className="container py-4">
      
      <h3></h3>
      <br />
      <br />
      
      {submitYes?(<Submission/>) : 

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
        <img src="src/assets/sad.png" alt="sad picture"  />
        <img src="src/assets/little_sad.png" alt="little_sad picture" />
        <img src="src/assets/normal.png" alt="normal picture"/>
        <img src="src/assets/happy.png" alt="happy picture" />
        <img src="src/assets/very_happy.png" alt="very happy picture" />
      </div>
      </>
      )}
       
      <button button type="button" className="btn btn-primary btn-lg mt-3" id = "submission"  onClick={() => setSubmitted(true)
      }>Submit</button>

      
      
    </main>
  )
}

export default Checkin;