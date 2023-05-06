import React from "react";
import "./App.css";
import Video from "./components/Video.js";
import videos from "./data/data.js";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App" onClick={()=> console.log('App')}>
      <h1 className="app">React Js Project</h1>
      <div>Videos</div>

      {/* Maps Higher order Function */}

      {videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verified}
          description={video.description}
          title={video.title}
          views={video.views}
          time={video.time}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing...." , video.title)}
            onPause={() => console.log("Paused..." , video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: "both" }}>
        {/* <PlayButton  message='Hi You haved paused video a Button' onVed= {() => alert('Playyy')}> Pause</PlayButton> */}
      </div>

      

<Counter />
      {/* <Video {...obj}  verified={true}  /> //use sread Operator spread that Objects  */}
    </div>

  );
}

export default App;
