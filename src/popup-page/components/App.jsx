import React from "react";
// import MyDropzone from "./Dropzone";
import ImageResizer from "./ImageResize";

function App() {
  return (
    <div style={{ width: "400px", height: "600px" }}>
      <h2 style={{ padding: "5px", margin: "10px 20px" }}>
        Image size converter
      </h2>
      {/* <MyDropzone /> */}
      <ImageResizer />
    </div>
  );
}

export default App;
