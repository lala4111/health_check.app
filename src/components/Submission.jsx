import { useEffect, useState } from "react";
import Checkin from "../pages/Checkin";
import Mood_Evaluator from "./Mood_Evaluator";

function Submission({mood}){
    const [image, setImages] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const getData = async ()=>{
        try{
            const res = await fetch("https://dog.ceo/api/breeds/image/random");
            if(!res.ok){
                throw new Error(`HTTP error: ${res.status}`);
            }

            
            const data = await res.json();

            setImages(data.message);
        } catch(err){
            setError(err.message);
        }finally{
            setIsLoading(false);
        }
    }; getData();
    }, [])

    if (isLoading) return <p>Loading...</p>; // show while loading
    if (error) return <p>Error: {error}</p>; // show if failed
    return (<div>
        <h1>Thank you for your checkin! </h1>
        <Mood_Evaluator mood = {mood} />
        <p>I hope this picture helps you to feel better!</p>
        {image && <img src={image} alt="Picture" style={{ width: "400px" }}></img>}
        
    </div>);
}






    
    

export default Submission;