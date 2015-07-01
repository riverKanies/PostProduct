//after installing firebase tools 
//you must have firebase account...

sudo npm install -g firebase-tools

//clone repo

git clone https://github.com/riverKanies/PostProduct.git

// change line 12 in scripts/app.js to link your firebase data

// remove firebase.json, then init fb folder and deploy

firebase init

firebase deploy

//you will need to set up security rules


// see tutorial that this project is based off at (task-ninja):

https://code4startup.com/

https://code4startup.com/projects/ninja-learn-angularjs-firebase-by-cloning-udemy