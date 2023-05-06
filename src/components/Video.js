import React from "react";
import "./Video.css";

function Video({title , id , channel="Tej Dost" ,views ,time ,description , verified , children }) {
 
  // // let verified = false ;
  // let channelJsx;
  // // if(verified){
  // //   channelJsx = <div className="channel">{channel} ✔️</div>
  // // } else {
  // //   channelJsx = <div className="channel">{channel}</div>
  // // }

    
   


  return (
    <>
    <div className="container">
    <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
    </div>

    <div className="description">{description}</div>

    <div className="title">{title}</div>
    {/* <div className="channel">{channel} {verified ? '✔️': null }</div> //Ternary Condition Operators */}
    <div className="channel">{channel} {verified && '✔️'}</div>
    {/* {verified ? <div className="channel">{channel} ✔️</div> : <div className="channel">{channel}</div> } */}
    <div className="views">{views} <span>.</span>{time}</div>
    <div>
      {children}
    </div>
    </div>
    </>
  );
}



export default Video;
