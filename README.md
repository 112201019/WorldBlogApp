#  World Blog App

A full-stack MERN blog platform where users can:
- Register and log in securely with JWT authentication
- Write and manage their own blogs (text + emojis)
- Organize blogs by topics
- Follow other users and collaborate on pair blogs (coming soon)

---

## Features Implemented

-  User Registration & Login with hashed passwords
-  JWT-based Authentication
-  Blog creation (protected route)
-  MongoDB + Mongoose for database interaction
-  Express.js backend API

---

##  Project Structure
```bash
server/
├── controllers/ # Route handlers (business logic)
│ └── userController.js
│ └── blogController.js
├── middleware/ # JWT auth middleware
│ └── authMiddleware.js
├── models/ # Mongoose schemas
│ └── User.js
│ └── Blog.js
├── routes/ # Route definitions
│ └── userRoutes.js
│ └── blogRoutes.js
├── .env # Environment variables
├── server.js # App entry point
```

---

##  Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/world-blog-backend.git
cd world-blog-backend/server
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a .env file in the server folder:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
PORT=5000
```
4. Run the server

```bash
npm start

Server will run at:

http://localhost:5000
```

Upcoming Features

     Blog viewing by topic or author

     Follow system

     Pair blog collaboration

     User profiles

     Frontend (React) integration

Tech Stack

    Node.js

    Express.js

    MongoDB + Mongoose

    JWT + bcrypt for auth

    REST API structure

💬 Contact

Built by Your Sriram Nangunoori (Sriram99) 
Feel free to open issues or contribute!
