import React from "react";
import './PlayButton.css';
function PlayButton({message , children , onPlay , onPause}){
    let playing = false; //dont use this approach
    function handleClick(e){
        // console.log(e);
        e.stopPropagation()
        e.preventDefault()
        if(playing){
            onPause()
        } else{
        // console.log(message);
        onPlay()
    }
    playing = !playing;
    }




    return(
        <button onClick={handleClick}>{children} : {playing ? '>':"||"}</button>
    )

}
export default PlayButton;