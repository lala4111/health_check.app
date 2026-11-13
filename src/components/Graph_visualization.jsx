import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,} from 'recharts';


function Graph_Visualization ({ checkins }) {
    const moodLabels = {
    1: "Very Sad 🤕",
    2: "Sad 😢",
    3: "Normal 🙂",
    4: "Happy 😀",
    5: "Very Happy 😆",
}
    if (checkins.length === 0) return <p>No check-ins yet.</p>

    return(
    <LineChart width={800} height={500} margin={{top: 20, right: 30, bottom: 30, left: 20}} data={checkins}>

    <Line type="monotone" dataKey="mood" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
    <CartesianGrid />
    <XAxis 
    dataKey="date" />
    
    <YAxis  
    ticks = {[1,2,3,4,5]}
    tick = {{fontSize:15}}
    tickFormatter={(value)=>moodLabels[value]}
    dataKey="mood"/>
    <Tooltip
      content={({ active, payload, label }) => {
        if (!active || !payload?.length) return null
        const checkin = payload[0].payload
        return (
          <div className="bg-white border rounded p-2">
            <p>Date: {label}</p>
            <p>Mood: {moodLabels[checkin.mood] ?? checkin.mood}</p>
            <p>Weather: {checkin.weather}</p>
          </div>
        )
      }}
    />
      
    </LineChart>);
    
}

export default Graph_Visualization;
