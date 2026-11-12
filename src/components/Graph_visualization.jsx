import {LineChart,Line,CartesianGrid,XAxis,YAxis,Label, Tooltip,} from 'recharts';


function Graph_Visualization (date,mood,){
    const moodLabels = {
    1: "Very Sad 🤕",
    2: "Sad 😢",
    3: "Normal 🙂",
    4: "Happy 😀",
    5: "Very Happy 😆",
}


    const data =[
       { date: '2026-11-1', mood : 1 , },
       { date: '2026-11-2', mood : 2 ,},
       { date: '2026-11-3', mood : 2 , },
       { date: '2026-11-4', mood : 2 , },
       { date: '2026-11-5', mood : 3 ,},
       { date: '2026-11-6', mood : 3 , },
       { date: '2026-11-7', mood : 3 ,},
       { date: '2026', mood : 3 , },
       { date: '2026', mood : 4 , },
       { date: '2026', mood : 5 , },
    ];
    return(
    <LineChart width={800} height={500} margin={{top: 20, right: 30, bottom: 30, left: 20}} data={data}>

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
    <Tooltip formatter={
        (value) => [moodLabels[value] ?? value, 'Mood']}
        labelFormatter={(date,weather) => `Date: ${date}`}
        
        
        />
      
    </LineChart>);
    
}

export default Graph_Visualization;
