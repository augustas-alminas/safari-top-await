import { testObj } from "async-test";

try {
    console.log('main2.js test import')
    document.getElementById('result2').innerText = testObj.msg;
} catch (ex) {
    console.error(ex);
}