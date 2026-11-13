import { useEffect, useState } from "react";


function Submission({mood,weather}){
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
        <p>I hope this picture helps you to feel better!</p>
        {image && <img src={image} alt="Picture" style={{ width: "400px" }}></img>}
        
    </div>);
}






    
    

export default Submission;