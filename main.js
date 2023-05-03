import { testObj } from "async-test";

try {
    console.log('main.js test import')
    document.getElementById('result').innerText = testObj.msg;
} catch (ex) {
    console.error(ex);
}