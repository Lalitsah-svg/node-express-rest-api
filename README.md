# Node Express REST API

A RESTful backend API built with Node.js and Express.js for managing blog posts, tasks, and user authentication.

## Author

Lalit Kumar

## Week 5 – Authentication

This project implements user authentication using hashed passwords and JSON Web Tokens (JWT).

Authentication features include:

- User signup
- Password hashing using `bcryptjs`
- User login
- JWT token generation
- Protected profile endpoint
- Bearer token authentication
- Input validation
- Duplicate email protection

## Week 5 – Connect Frontend to Backend

This project was also extended to provide a complete REST API for the React blog frontend.

The API supports CRUD operations for blog posts:

- List all posts
- Get a single post
- Create a new post
- Update an existing post
- Delete a post

## Technologies Used

- Node.js
- Express.js
- JavaScript
- bcryptjs
- jsonwebtoken
- CORS
- dotenv
- Postman

## Authentication API

### 1. Signup

**Endpoint:**

`POST /api/auth/signup`

**Request body:**

```json
{
  "name": "Lalit Kumar",
  "email": "lalit@example.com",
  "password": "Lalit@123456"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

The password is hashed using `bcryptjs` before being stored.

### 2. Login

**Endpoint:**

`POST /api/auth/login`

**Request body:**

```json
{
  "email": "lalit@example.com",
  "password": "Lalit@123456"
}
```

A successful login returns a JWT token.

```json
{
  "success": true,
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

### 3. Protected Profile

**Endpoint:**

`GET /api/auth/profile`

This endpoint requires a valid JWT access token.

In Postman, use:

- Authorization
- Type: `Bearer Token`
- Paste the JWT received from the login endpoint

Successful response:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Lalit Kumar",
    "email": "lalit@example.com"
  }
}
```

Without a valid token, the API returns an authentication error.

## Authentication Flow

```text
Signup
  ↓
Password hashed with bcryptjs
  ↓
User stored
  ↓
Login
  ↓
Password verified
  ↓
JWT generated
  ↓
Bearer token sent with request
  ↓
Protected API endpoint
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
JWT_SECRET=your_jwt_secret_here
```

Do not commit the `.env` file to GitHub.

Use `.env.example` as a template.

## Running the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm start
```

The API will run at:

```text
http://localhost:3000
```

## API Routes

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |
| GET | `/api/auth/profile` | Get authenticated user profile |

### Blog Posts

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get a single post |
| POST | `/api/posts` | Create a post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

### Tasks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a single task |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Project Structure

```text
node-express-rest-api/
├── src/
│   ├── app.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── taskController.js
│   ├── data/
│   │   ├── posts.js
│   │   ├── tasks.js
│   │   └── users.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── routes/
│       ├── authRoutes.js
│       ├── postRoutes.js
│       └── taskRoutes.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Testing

The authentication endpoints were tested using Postman:

1. Signup a new user.
2. Login using the registered email and password.
3. Copy the JWT token returned by the login endpoint.
4. Send the token as a Bearer token to `/api/auth/profile`.
5. Verify that the protected endpoint returns the authenticated user's profile.
6. Test the protected endpoint without a token to verify authentication protection.

## Security Notes

- Passwords are never stored as plain text.
- Passwords are hashed using `bcryptjs`.
- JWT tokens are signed using a server-side secret.
- The JWT secret is stored in an environment variable.
- The `.env` file is excluded from Git using `.gitignore`.
- Protected routes require a valid Bearer token.

## Author

Lalit Kumar