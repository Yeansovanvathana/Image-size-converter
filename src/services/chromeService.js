/*global chrome*/
/**
 * Abstraction class to interact with the chrome extension API
 *
 * @export
 * @class ChromeApi
 */

class ChromeApi {
  constructor() {}

  sendMessageT = (action, payload, callback) => {
    chrome.runtime.sendMessage(action, payload, callback);
  };

  sendMessageToActiveTab = async (payload, callback) => {
    const tab = await this.getActiveTab();
    chrome.tabs.sendMessage(tab.id, payload, callback);
  };

  takeScreenShot = () => {
    return new Promise((resolve, reject) => {
      try {
        chrome.tabs.captureVisibleTab((screenshotUrl) => {
          resolve(screenshotUrl);
        });
      } catch (e) {
        reject(e);
      }
    });
  };
}
const chromeService = new ChromeApi();
export default chromeService;
