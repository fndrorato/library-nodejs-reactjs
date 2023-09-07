# MERN CRUD - Simple Book Management System


This is a simple MERN stack application for managing books. It allows you to perform CRUD operations on books, including adding, viewing, updating, and deleting book records.
See the [example](https://book-app-fndrorato.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

## Features

- Create, Read, Update, and Delete books.
- Store book information, including title, author, front cover and description.
- User-friendly interface for managing books.
- Responsive design for mobile and desktop.

## Technologies Used

- **MongoDB**: Database for storing book data.
- **Express.js**: Node.js web application framework for the backend.
- **React**: JavaScript library for building the frontend user interface.
- **Node.js**: Runtime environment for running the server.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Bootstrap**: CSS framework for styling the application.
- **Axios**: Promise-based HTTP client for making API requests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fndrorato/library-nodejs-reactjs.git
2. Navigate to the backend directory:
    ```bash
    cd backend
    npm install
3. Create and Configure .env
    ```bash
    PORT=3001
    MONGO_URL='mongodb+srv://dummyuser:<yourPassword>@cluster0.ibrbuu9.mongodb.net/?retryWrites=true&w=majority' 
4. Now, install client (frontend)
    ```bash
    cd ..
    cd book-app
    npm install

## Usage

1. Start the server (backend):
    ```bash
    cd..
    cd backend
    npm run app
2. In a separate terminal, start the client:
    ```bash
    npm start
3. Open your browser and visit http://localhost:3000 to use the application.

## API Endpoints
- **GET /api/books**: Get a list of all books.
- **GET /api/books/:id**: Get details of a specific book by ID.
- **POST /api/books**: Create a new book record.
- **PUT /api/books/:id**: Update an existing book by ID.
- **DELETE /api/books/:id**: Delete a book by ID.
