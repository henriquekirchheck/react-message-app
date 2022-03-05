# This is the Web App for this project

You can see the available scripts for this project below

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Change server ip:

To change the ip that the server will look for the server, modify `./src/services/webSocket.ts`

## Add Firebase API Keys

This app uses Firebase for authentication, so you need to create a firebase project and add authentication to it  

I plan to support Email, Google and Github Authentication in this app, so you need to enable the three for now

To add the enviroment variables, add a `.env` file in the `web-app` folder and add the variables to it  
the name of the variables are declared in `firebase.ts`
