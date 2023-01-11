# Random User App
A React application that fetches random user data from the https://randomuser.me/api/ API and displays it on the homepage. The user can then edit the name and update it on the homepage. 

## Technologies Used
- React 
- TypeScript 
- Axios 

## Getting Started
1. Clone the repository: `git clone https://github.com/Andrea-Agosta/PGP-TS-labs-Collection`
2. Navigate to the directory `cd ./addons-ts-lab-reactbasics-main`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open a web browser and navigate to `http://localhost:3000`

## Features
- Fetches random user data from the https://randomuser.me/api/ API and displays it on the homepage
- User can edit the name of the user from a form component
- User can update the name on the homepage

## Components
- Homepage component that displays the user data and has a form to edit the name
- Form component that takes the user input for the new name and has a button to submit the update
- Axios is used to handle the HTTP requests to the API

## Folder Structure
- `src/components` contains the components of the application
- `src/App.tsx` is the entry point of the application
