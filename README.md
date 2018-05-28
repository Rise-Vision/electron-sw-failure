### Multiple app worker failure

Service workers only work in first Electron app. If a second is started, workers won't register in that app.

 - Run `npm install` 
 - Copy entire directory to another subdirectory of parent
 - Run `npm start` in the first directory
 - Notice the worker tests pass
 - Leave the window open and run `npm start` in the second directory
 - Notice the worker tests fail
