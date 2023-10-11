// src/ImagePreview.js
import React from "react";
import "./../App.css";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const ImagePreview = ({ image }) => {
  return (
    <div className="preview">
      {image && (
        <aside style={thumbsContainer}>
          <div style={thumb}>
            <div style={thumbInner}>
              <img src={image.src} style={img} />
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default ImagePreview;
