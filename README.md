# Movies API Project

This project provides a simple API for managing movie data, including CRUD (Create, Read, Update, Delete) operations.

## Project Structure

- **server.js**: Main entry point for the server. Handles server configuration, database connection, and server initialization.

- **routes/index.js**: Defines API routes for movie-related operations using Express.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up the MongoDB database:

   - Create a `.env` file in the root directory and add the following:

     ```env
     DATABASE_URL=your_mongodb_connection_string
     ```

   - Replace `your_mongodb_connection_string` with the actual connection string for your MongoDB instance.

3. Start the server:

   ```bash
   node server.js
   ```

   The server will run on `http://localhost:3000` by default.

## API Endpoints

### Create Movie

- **Endpoint**: `POST /api/movie`
- **Request Body**:
  ```json
  {
    "title": "Movie Title",
    "year": 2022,
    "runTime": "2h 30min",
    "genre": ["Action", "Adventure"],
    "director": "Director Name",
    "actors": ["Actor1", "Actor2"],
    "plot": "Movie Plot",
    "imdbRating": 8.5,
    "imdbID": "tt1234567"
  }
  ```
- **Response**: The created movie data.

### Read Movies

- **Endpoint**: `GET /api/movies`
- **Response**: Array of all movies.

### Read Movie by ID

- **Endpoint**: `GET /api/movies/:id`
- **Response**: Movie data for the specified ID.

### Update Movie

- **Endpoint**: `PUT /api/movies/:id`
- **Request Body**: Updated movie data.
- **Response**: Updated movie data.

### Delete Movie

- **Endpoint**: `DELETE /api/movies/:id`
- **Response**: Success message.

## Dependencies

- [Express](https://expressjs.com/): Web application framework for Node.js.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [nodemon](https://www.npmjs.com/search?q=nodemon&csrftoken=NnCPaHFjQB5qhVfZTcKxBXsAqX_W9X3hbPM4pXWAEMF): Install nodemon
  
## Deployment Link

(https://movie-api-x0vl.onrender.com)

