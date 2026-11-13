import Checkin from "../pages/Checkin";

function Mood_Evaluator ({mood}){

    const message = {
        1:"What made you sad today?",
        2: "Are you physically tired or mentally tired?",
        3: "What makes you feel better or do you think it is enough?",
        4: "Did you have any good things to you?",
        5:"What kind of good things happen to you?"
    }

    

    return <p>{message[mood]?? "Select the mood first"}</p>;
}

export default Mood_Evaluator;