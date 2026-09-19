Yes — you need the **actual Markdown content** that you can copy directly into a `README.md` file. Here is a clean GitHub-style version with proper Markdown headings, tables, code blocks, and sections.

# User Management API

A RESTful User Management API built with **Node.js, Express.js, MongoDB, and Mongoose**.
This project implements basic **CRUD (Create, Read, Update, Delete)** operations for managing users.

## Features

* Create a new user
* Get all users
* Get a single user by ID
* Update an existing user
* Delete a user
* MongoDB database integration
* Mongoose for database operations
* Express.js routing
* MVC-style project structure
* Async/await for asynchronous operations
* Error handling using Express middleware

## Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Backend web framework
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB ODM
* **Postman** – API testing

## Project Structure

```text
user-management-api/
│
├── controller/
│   └── userController.js
│
├── Models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── server.js
│
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/user-management-api.git
```

### 2. Navigate to the project directory

```bash
cd user-management-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your system.

This project currently does not use an `.env` file. The MongoDB connection is configured directly in the application.

### 5. Start the server

For development:

```bash
npm run dev
```

Or start the server directly:

```bash
node server.js
```

The API will be available at:

```text
http://localhost:5000
```

> Change the port according to your `server.js` configuration.

---

# API Documentation

## Base URL

```text
http://localhost:5000/api/v1
```

## Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/users`     | Create a new user |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get a user by ID  |
| PUT    | `/users/:id` | Update a user     |
| DELETE | `/users/:id` | Delete a user     |

---

# Create User

Creates a new user in the database.

### Endpoint

```http
POST /api/v1/users
```

### Request Body

```json
{
  "name": "Mohamed",
  "email": "mohamed@example.com",
  "age": 21
}
```

### Response

```json
{
  "success": true,
  "user": {
    "_id": "68c123456789",
    "name": "Mohamed",
    "email": "mohamed@example.com",
    "age": 21
  }
}
```

### Status Code

```text
201 Created
```

---

# Get All Users

Returns all users stored in the database.

### Endpoint

```http
GET /api/v1/users
```

### Response

```json
{
  "success": true,
  "users": [
    {
      "_id": "68c123456789",
      "name": "Mohamed",
      "email": "mohamed@example.com",
      "age": 21
    },
    {
      "_id": "68c987654321",
      "name": "John",
      "email": "john@example.com",
      "age": 25
    }
  ]
}
```

### Status Code

```text
200 OK
```

---

# Get User By ID

Returns a specific user using their MongoDB ID.

### Endpoint

```http
GET /api/v1/users/:id
```

### Example

```http
GET /api/v1/users/68c123456789
```

### Response

```json
{
  "success": true,
  "user": {
    "_id": "68c123456789",
    "name": "Mohamed",
    "email": "mohamed@example.com",
    "age": 21
  }
}
```

### User Not Found

```json
{
  "success": false,
  "message": "UserId is not found"
}
```

### Status Codes

```text
200 OK
404 Not Found
```

---

# Update User

Updates an existing user's information.

### Endpoint

```http
PUT /api/v1/users/:id
```

### Example

```http
PUT /api/v1/users/68c123456789
```

### Request Body

```json
{
  "name": "Mohamed Thayub",
  "email": "thayub@example.com",
  "age": 22
}
```

### Response

```json
{
  "success": true,
  "user": {
    "_id": "68c123456789",
    "name": "Mohamed Thayub",
    "email": "thayub@example.com",
    "age": 22
  }
}
```

### User Not Found

```json
{
  "success": false,
  "message": "User not found"
}
```

### Status Codes

```text
200 OK
404 Not Found
```

---

# Delete User

Deletes an existing user from the database.

### Endpoint

```http
DELETE /api/v1/users/:id
```

### Example

```http
DELETE /api/v1/users/68c123456789
```

### Response

```json
{
  "success": true,
  "message": "User deleted Successfully"
}
```

### User Not Found

```json
{
  "success": false,
  "message": "User not found"
}
```

### Status Codes

```text
200 OK
404 Not Found
```

---

# CRUD Operations

This API implements the four fundamental CRUD operations:

| Operation | HTTP Method | Endpoint     |
| --------- | ----------- | ------------ |
| Create    | POST        | `/users`     |
| Read All  | GET         | `/users`     |
| Read One  | GET         | `/users/:id` |
| Update    | PUT         | `/users/:id` |
| Delete    | DELETE      | `/users/:id` |

---

# API Architecture

The project follows a simple MVC-style architecture.

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Mongoose Model
   │
   ▼
MongoDB
```

### Routes

Routes define the API endpoints and connect them to the appropriate controller functions.

Example:

```javascript
router.route("/users")
    .post(createUser)
    .get(getUsers);

router.route("/users/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
```

### Controllers

Controllers contain the logic for:

* Creating users
* Retrieving users
* Updating users
* Deleting users

### Model

The `User` model defines the structure and validation rules for user data and communicates with MongoDB through Mongoose.

---

# Error Handling

The controllers use `try...catch` blocks to handle asynchronous errors.

Errors are passed to the next middleware using:

```javascript
next(error);
```

Example:

```javascript
try {
    // API logic
} catch (error) {
    next(error);
}
```

---

# Testing

The API can be tested using:

* Postman
* Thunder Client
* Insomnia
* cURL

### Example: Get All Users

```bash
curl http://localhost:5000/api/v1/users
```

### Example: Create User

```bash
curl -X POST http://localhost:5000/api/v1/users \
-H "Content-Type: application/json" \
-d '{
  "name": "Mohamed",
  "email": "mohamed@example.com",
  "age": 21
}'
```

---

# Future Improvements

The current project focuses on basic CRUD operations.

Planned improvements include:

* [ ] Request validation
* [ ] Centralized error handling
* [ ] Pagination
* [ ] Search functionality
* [ ] Filtering
* [ ] Sorting
* [ ] JWT authentication
* [ ] Password hashing with bcrypt
* [ ] Role-based authorization
* [ ] API documentation with Swagger
* [ ] Unit and integration testing
* [ ] Docker support
* [ ] Environment variables
* [ ] Rate limiting
* [ ] API versioning

---

# Learning Objectives

This project was built to practice and understand:

* REST API development
* Node.js
* Express.js
* MongoDB
* Mongoose
* CRUD operations
* HTTP methods
* HTTP status codes
* Express routing
* Route parameters
* Request and response handling
* Async/await
* Error handling
* MVC architecture

---

# Author

**Mohamed Mohideen Thayub**

MERN Stack Developer

### Technologies

```text
JavaScript
Node.js
Express.js
MongoDB
Mongoose
React
REST APIs
Git
```

---

# Project Status

**Status:** Completed - Basic CRUD API

The project currently supports complete user CRUD operations.

Future versions will focus on authentication, validation, testing, pagination, security, and other production-level backend features.
