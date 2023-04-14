# Star Wars Info

A project to display information about Star Wars characters, planets, and starships using the SWAPI API. This project is built using Laravel for the backend API which provides RESTful API endpoints. React for the frontend, using Material-UI for styling in a single-page application (SPA) design.

## Features
- Display a list of Star Wars characters, planets, and starships
- Show details of individual characters, planets, and starships
- Search functionality to find specific characters through their names

### Features to be added 
- Pagination for character, film, and starship lists

## Technologies Used
- Laravel
- Vite.js
- React.js
- Material-UI
- Axios
- Guzzle

## How to Use
1. Clone the repository.
2. Navigate to the `backend` directory and run `composer install` to install dependencies.
3. Create a new file named `.env` in the `backend` directory and copy the contents of the `.env.example` file into it.
4. Generate a new `APP_KEY` by running `php artisan key:generate`.
5. Run `php artisan migrate` to create the necessary tables in the database.
6. Run the Laravel backend API by running `php artisan serve`.
7. Navigate to the `frontend` directory and run `npm install` to install dependencies.
8. Run the frontend by running `npm run dev`.
9. Open your browser and go to `http://localhost:3000`.

## Credits
- [SWAPI API](https://swapi.dev/)
