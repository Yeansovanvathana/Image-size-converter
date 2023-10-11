const Tesseract = require("tesseract.js");
import { createWorker } from "tesseract.js";

window.addEventListener("message", (event) => {
  console.log("message received in sandbox");
  const { action, payload } = event.data;
  const imgUrl = payload.imageURL;

  if (action === "performOCR") {
    Tesseract.recognize(imgUrl, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        console.log(text);
        window.parent.postMessage(
          { action: "OCRResult", payload: { text } },
          "*"
        );
      })
      .catch((error) => {
        console.error("Error in OCR:", error);
      });
  }
});
