    import { useState } from "react";
    import { useEffect } from "react";



function Weather_Check({ onWeatherChange }){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [weather, setWeather] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
            const getData = async ()=>{
            try{
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=62.60118&lon=29.76316&appid=${API_KEY}`);
                if(!res.ok){
                    throw new Error(`HTTP error: ${res.status}`);
                }
    
                const data = await res.json();
    
                const currentWeather = data.weather[0].main
                setWeather(currentWeather);
                onWeatherChange(currentWeather)
            } catch(err){
                setError(err.message);
            }finally{
                setIsLoading(false);
            }
        }; getData();
        }, [API_KEY, onWeatherChange])
    
        if (isLoading) return <p>Loading...</p>; 
        if (error) return <p>Error: {error}</p>; 

        return (
        <>
        <div>
            {weather === "Rain" && 
            (<>
            <h3>It's rainy ☔️ at The moment</h3>
            <p>Don't forget to eat sweet things and have some resting</p>
            </>)}
            {weather === "Clear" && (
            <>
            <h3>It's sunny! ☀️</h3>
            <p>It's finally sunny! Do you feel slightly energized?</p>
            </>)}
            {weather === "Clouds" && (
            <>
            <h3>It's cloudy ☁️</h3>
            <p>Do you feel a little tired? or having headache?</p>
            </>)}

            {!["Rain","Clear","Clouds"].includes(weather) && (
                <p>It is {weather} today !</p>
            )}
        </div>


        </>);
}

export default Weather_Check;