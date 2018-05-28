### Multiple app worker failure

Service workers only work in first Electron app. If a second is started, workers won't register in that app.

 - Run `npm install` 
 - Copy entire directory to another subdirectory of parent
 - So we have parent\sw-test and parent\sw-test-copy
 - Run npm start in each
 - Notice only the first one passes the tests
