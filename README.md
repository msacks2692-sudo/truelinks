# truelinks

Dating App that uses Ai to learn your likes and dislikes that will match you with someone based off of your activities before looks

## Project Structure

The project is a monorepo containing the frontend and backend services for the TrueLinks application.

-   `frontend/`: Contains the React frontend application.
-   `backend/`: Contains the Flask backend application.
-   `docker-compose.yml`: Defines the services, networks, and volumes for the Docker application.

## Getting Started

To get the application running locally, you need to have Docker and Docker Compose installed.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/truelinks.git
    cd truelinks
    ```

2.  **Build and run the application using Docker Compose:**
    ```sh
    docker-compose up --build
    ```

The frontend will be available at [http://localhost:3000](http://localhost:3000), and the backend will be available at [http://localhost:5000](http://localhost:5000).

## Services

-   **Frontend:** A React application that serves the user interface.
-   **Backend:** A Flask application that provides the API for the frontend.
