import { testObj } from "async-test";

try {
    console.log('setting test message')
    document.getElementById('result').innerText = testObj.msg;
} catch (ex) {
    console.error(ex);
}