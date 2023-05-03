# Safari Top Await Bug
This repository contains HTML and JavaScript files that reproduce a bug in Safari where multiple files import a file with top-level await, but only the first file awaits it, while the other imports are resolved without awaiting.  
Tested on Safari 16.4. Site deployed to https://augustas-alminas.github.io/safari-top-await/  

Expected result: [file1.js](https://github.com/augustas-alminas/safari-top-await/blob/main/src/file1.js) and [file2.js](https://github.com/augustas-alminas/safari-top-await/blob/main/src/file2.js) wait for the top level await in [topLevelAwait.js](https://github.com/augustas-alminas/safari-top-await/blob/main/src/topLevelAwait.js) to be resolved before continuing execution.  
Gotten result on Safari: only the first file that inmports `topLevelAwait.js` stops execution and waits of it to be resolved.

| Chrome 	| Safari 	|
|--------	|--------	|
| ![image](https://user-images.githubusercontent.com/75607075/235843590-aba36be5-5d88-45ee-89d1-2ec0dafc7a24.png)       	| ![image](https://user-images.githubusercontent.com/75607075/235844200-41c8f5fc-aaf3-4016-9ba0-eb4b6561a8ae.png)

