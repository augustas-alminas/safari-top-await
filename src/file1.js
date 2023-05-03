import { testObj } from "./topLevelAwait.js";

try {
    console.log('file1: setting result')
    document.getElementById('result').innerText = testObj.msg;
} catch (ex) {
    console.error(ex);
}