// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import Resizer from "react-image-file-resizer";
// import FileSaver from "file-saver";

// const thumbsContainer = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   marginTop: 16,
// };

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   width: 100,
//   height: 100,
//   padding: 4,
//   boxSizing: "border-box",
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   overflow: "hidden",
// };

// const img = {
//   display: "block",
//   width: "auto",
//   height: "100%",
// };

// function Dropzone() {
//   const [files, setFiles] = useState([]);
//   const [resizedFiles, setResizedFiles] = useState([]);
//   const [width, setWidth] = useState("");
//   const [height, setHeight] = useState("");

//   const { getRootProps, open, getInputProps } = useDropzone({
//     accept: {
//       "image/*": [],
//     },
//     onDrop: async (acceptedFiles) => {
//       const resizedFiles = await Promise.all(
//         acceptedFiles.map((file) => {
//           const resizedImageUri = resizeFile(file);
//           return Object.assign(file, {
//             preview: resizedImageUri,
//           });
//         })
//       );
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         )
//       );
//       setResizedFiles(resizedFiles);
//     },
//   });

//   console.log(resizedFiles, width, height);
//   const resizeFile = (file) => {
//     new Promise((resolve) => {
//       Resizer.imageFileResizer(
//         file,
//         width,
//         height,
//         "JPEG",
//         100,
//         0,
//         (uri) => {
//           resolve(uri);
//         },
//         "base64"
//       );
//     });
//   };

//   const handleDownload = () => {
//     resizedFiles.forEach((file, index) => {
//       FileSaver.saveAs(file.preview, "image.png");
//     });
//   };

//   return (
//     <section className="container">
//       <div {...getRootProps({ className: "dropzone" })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <div>
//         <label>
//           Width:
//           <input
//             type="number"
//             value={width}
//             onChange={(e) => setWidth(e.target.value)}
//           />
//         </label>
//         <label>
//           Height:
//           <input
//             type="number"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//         </label>
//         <button onClick={handleDownload}>Download Resized Images</button>
//       </div>
//       <aside style={thumbsContainer}>
//         {files.map((file, index) => (
//           <div style={thumb} key={file.name + index}>
//             <div style={thumbInner}>
//               <img src={file.preview} style={img} alt={`Thumbnail ${index}`} />
//             </div>
//           </div>
//         ))}
//       </aside>
//     </section>
//   );
// }

// export default Dropzone;
