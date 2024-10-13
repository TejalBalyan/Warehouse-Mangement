# Warehouse Inventory Management System
## Introduction
This project is a full-stack web application designed for managing warehouse items and locations. It allows users to add, update, and remove items, monitor stock levels, and track stock locations. The backend is built using Node.js, Express, and MongoDB, while the frontend is developed with React to provide a dynamic and user-friendly interface.
## Thought Process & Approach
### Initial Research and Planning
The project began with outlining the core functionalities needed in a warehouse management system, such as item and location management, stock monitoring, and category-wise filtering. The design focused on providing a simple and efficient interface for users to track inventory and manage warehouse locations.
### Backend Design
The backend follows a RESTful architecture, using Node.js and Express to handle requests and MongoDB to store warehouse data. Key API routes manage items, locations, and stock levels. MongoDB was chosen for its flexibility in handling dynamic schema changes, which is ideal for this warehouse inventory system.
### Frontend Design
The frontend is built using React, which enables a responsive and dynamic user interface. React components are used for rendering warehouse items and locations, with Redux for state management. This ensures data flows seamlessly between the frontend and backend.
### Challenges & Solutions
One key challenge was ensuring real-time updates of inventory levels across multiple warehouses. This was handled by implementing WebSocket connections to reflect changes instantly on the frontend without requiring manual page refreshes.
## Technologies Used
- **Frontend**: React, Redux
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker
- **Version Control**: Git
- **WebSockets**: For real-time updates
## Setup Instructions
### Running Locally
#### Prerequisites
- Node.js and npm installed
- MongoDB installed locally or access to a cloud-hosted MongoDB instance
#### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/warehouse-management.git
Navigate to the backend directory:
cd la
Install dependencies:
npm install
Create a .env file in the la folder and add the following environment variables:
env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/warehouse
Start the backend server:
npm start
Frontend Setup
Navigate to the frontend directory:
cd ../la
Install dependencies:
npm install
Start the React development server:
npm start
Open the browser and go to http://localhost:3000 to access the frontend.
Running with Docker
Prerequisites
Docker installed
Steps
Build and run the Docker containers:
docker-compose up --build
The backend will be accessible at http://localhost:5000 and the frontend at http://localhost:3000.
To stop the containers:
docker-compose down
Using Docker without Rebuilding Each Time
To avoid rebuilding the Docker image with every code change, mount your local directories as volumes in docker-compose.yml:
services:
  backend:
    volumes:
      - ./warehouse-backend:/app
  frontend:
    volumes:
      - ./warehouse-frontend:/app
Deployment
The project is deployed using Docker on a cloud platform like AWS (or another cloud provider). The live application can be accessed at the following URLs:
Frontend: http://your-frontend-url.com
Backend: http://your-backend-url.com
Troubleshooting
MongoDB connection error: Ensure MongoDB is running locally or update the MONGO_URI in your .env file to point to your MongoDB instance.
Port binding error: If you encounter a "port already in use" error, kill the process occupying the port:
bash
Copy code
netstat -ano | findstr :5000
taskkill /PID <PID> /F
Contributing
If you'd like to contribute to this project, follow these steps:
Fork the repository.
Create a new branch:
git checkout -b feature-branch
Make your changes and commit them:
git commit -m "Add feature"
Push the branch to your forked repository:
git push origin feature-branch
Open a pull request.
