# Puppy Application
A web application that allows users to view, add, edit, and delete information about puppies.

## Technologies Used
- Node.js with Typescript and Express for the backend server
- React with Typescript for the frontend
- Bootstrap for styling

## Getting Started
1. Clone the repository: `git clone https://github.com/Andrea-Agosta/PGP-TS-labs-Collection`
2. Navigate to the directory `cd ./puppies_fullApplication/server`
3. Install dependencies: `npm install`
4. Start the backend server: `npm run server`
5. Open a new tab on your terminal and navigate to the directory `cd ./puppies_fullApplication/client`
6. Start the frontend: `npm start`
7. Open a web browser and navigate to `http://localhost:3000`

## Features
- View a list of puppies with details such as name, breed, and age
- View images of puppies
- Add new puppies to the list
- Edit existing puppy information
- Delete puppies from the list

## API Endpoints
- GET `/api/puppies` - Retrieve a list of all puppies
- GET `/api/puppies/:id` - Retrieve a specific puppy by ID
- POST `/api/puppies` - Add a new puppy to the list
- PUT `/api/puppies/:id` - Update a specific puppy by ID
- DELETE `/api/puppies/:id` - Delete a specific puppy by ID