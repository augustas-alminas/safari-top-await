import { testObj } from "./topLevelAwait.js";

try {
    console.log('file2: setting result')
    document.getElementById('result2').innerText = testObj.msg;
} catch (ex) {
    console.error(ex);
}