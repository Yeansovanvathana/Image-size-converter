import React, { useState } from "react";
import ImagePreview from "./Preview";
import "./../App.css";

const ImageResizer = () => {
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        setImage(img);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        setImage(img);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleResize = () => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);
    const resizedImage = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = resizedImage;
    link.download = "resized_image.png";
    link.click();
  };

  return (
    <div className="container">
      <div
        className="flex-center full-width"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label htmlFor="dropzone-file" className="dropzone">
          <div className="label-container">
            <svg
              className="icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="text-center text-sm text-gray font-semibold">
              Click to upload or drag and drop
            </p>
            <p className="text-center text-xs text-gray">SVG, PNG, JPG</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            style={{ visibility: "hidden" }}
            onChange={handleFileChange}
          />
        </label>
      </div>

      <ImagePreview image={image} />
      <div className="item-container">
        <div className="item">
          <label className="item-label">Width</label>
          <input
            className="item-input"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="item">
          <label className="item-label">Height</label>
          <input
            className="item-input"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleResize}>Convert</button>
    </div>
  );
};

export default ImageResizer;
