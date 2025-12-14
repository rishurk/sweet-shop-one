Sweet Shop Management System
Overview

The Sweet Shop Management System is a full-stack web application designed to manage sweets inventory, user authentication, and order processing. The project is built using FastAPI for the backend and React for the frontend, following RESTful API principles, secure authentication practices, and clean software architecture.

This project was developed as part of an AI Kata to demonstrate backend API design, frontend integration, database management, testing, and responsible use of AI tools.

Features
Authentication

User registration

User login using OAuth2 password flow

JWT-based token authentication

Role-based access control (User and Admin)

Sweets Management

View all available sweets

Add new sweets (Admin only)

Update sweet details

Delete sweets (Admin only)

Search sweets by name, category, or price range

Orders and Inventory

Purchase sweets and automatically update stock

Prevent purchase when stock is unavailable

Restock sweets (Admin only)

Testing

Backend API testing using pytest

Authentication and core logic test coverage

Technology Stack
Backend

Python 3.12

FastAPI

SQLAlchemy

SQLite

JWT (python-jose)

Passlib (Argon2)

Frontend

React (Vite)

JavaScript

Axios

Tools

Git and GitHub

Pytest

Swagger UI

Project Structure
sweet-shop/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── security.py
│   │   ├── jwt_utils.py
│   │   └── routers/
│   │       ├── auth.py
│   │       ├── products.py
│   │       └── orders.py
│   │
│   ├── tests/
│   │   ├── test_auth.py
│   │   ├── test_products.py
│   │   └── test_orders.py
│   │
│   ├── sweetshop.db
│   ├── requirements.txt
│   │
│   └── venv/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── auth/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md

Local Setup Instructions
Prerequisites

Python 3.12.x

Node.js (LTS)

Git

Backend Setup

Navigate to the backend directory:

cd backend


Create and activate a virtual environment:

python -m venv venv
venv\Scripts\activate


Install dependencies:

pip install -r requirements.txt


Start the backend server:

uvicorn app.main:app --reload


Backend will run at:

http://127.0.0.1:8000


Swagger API documentation:

http://127.0.0.1:8000/docs

Frontend Setup

Navigate to the frontend directory:

cd frontend


Install dependencies and start the development server:

npm install
npm run dev


Frontend will run at:

http://localhost:5173

Authentication Flow

User registers using the /register endpoint.

User logs in using the /token endpoint.

Backend returns a JWT access token.

The token is stored on the client and sent in the Authorization header for protected requests.

Testing

This project follows Test-Driven Development principles for backend functionality.

Running Tests
cd backend
venv\Scripts\activate
pytest

Sample Test Output
==================== test session starts ====================
platform win32 -- Python 3.12
collected 6 items

tests/test_auth.py ......                              [100%]

==================== 6 passed in 1.20s =====================


All tests pass successfully, confirming correct API behavior.

Screenshots

Screenshots of the application in use should be added to a screenshots directory.
Recommended screenshots include:

User registration page

Login page

Products listing

Swagger API documentation

My AI Usage
AI Tools Used

ChatGPT

How AI Was Used

Designing REST API structure and database schema

Generating initial FastAPI boilerplate code

Debugging authentication, JWT, and environment-related issues

Writing and refining pytest test cases

Improving project structure and documentation

Reflection

AI tools significantly improved development efficiency and helped resolve complex technical issues. All AI-generated code was reviewed, tested, and adapted manually to ensure correctness, security, and originality. AI was used as a development aid, not as a substitute for understanding or decision-making.

Live Deployment (Optional)

This project can optionally be deployed using platforms such as:

Frontend: Vercel or Netlify

Backend: Render, Railway, Heroku, or AWS

If deployed, links can be added here:

Frontend: https://your-frontend-url
Backend API: https://your-backend-url


Deployment was optional for this assignment; local setup instructions are sufficient to run the application.

Git Repository

Public repository link:

https://github.com/your-username/sweet-shop

Conclusion

This project demonstrates a complete full-stack implementation using modern backend and frontend technologies. It showcases secure authentication, clean API design, database integration, automated testing, and responsible use of AI tools, aligned with real-world development practices.
