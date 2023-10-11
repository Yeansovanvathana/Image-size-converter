// Add a listener to handle messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "takeScreenShot") {
    const screenshotUrl = request.payload.croppedImage;

    // Send a response back to the popup (optional)
    sendResponse({ message: "Response from background script" });
  }
});
