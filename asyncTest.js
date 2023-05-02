const testObj = {
    msg: 'pre-await',
}

function init() {
    return new Promise((res) => {
        setTimeout(() => {
            testObj.msg = 'post-await';
            res();
        }, 1500);
    });
}

console.log('pre-await');
await init();
console.log('post-await');

export { testObj }