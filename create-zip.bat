rem see https://developer.chrome.com/webstore/get_started_simple#step5

del google-chrome-inline-images.zip
"c:\Program Files\7-Zip\7z.exe" a google-chrome-inline-images.zip *.png *.json *.js

rem Now go to https://chrome.google.com/webstore/developer/dashboard
rem and publish the Zip