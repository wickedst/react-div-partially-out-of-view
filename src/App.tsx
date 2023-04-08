import React, { useState } from "react";
import useInView from "./useInView";

function App() {
  const [width, setWidth] = useState(860);

  const { observe, inView: fullyInView } = useInView({
    threshold: 0.99,
  });

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <div
        ref={observe}
        style={{
          width,
          height: 100,
          background: "red",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        {fullyInView ? "🤗" : "😴"}
      </div>
    </div>
  );
}

export default App;
