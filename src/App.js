import "./App.css";
import React from "react";
import LeftSide from "./Components/leftSide";
import StorySection from "./Components/storySection";

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>
      <div className="middleSide">
        <StorySection />
      </div>
      <div className="rightSide">RoghtSide</div>
    </div>
  );
}

export default App;
