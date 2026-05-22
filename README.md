# Visual Multi-Factor Authentication System (MERN Stack)

A secure, modern web application featuring an innovative, creative authentication system. This project replaces traditional text-based passwords with a multi-step visual pattern password combined with robust backend security protocols.

## System Purpose
The purpose of this application is to bridge the gap between user-friendly security and robust backend protection. Traditional text-based passwords are often vulnerable to shoulder-surfing, brute-force attacks, or user forgetfulness. This system provides a dynamic, highly visual alternative that makes authentication both engaging and secure, while establishing a modern foundation for eCommerce or role-based user management.

---

## The Creative Authentication Method

Instead of typing a string of letters, numbers, and symbols, users select a sequence of image panels to create their password.

* **The Mechanics:** During registration, users choose a specific pattern across 3 sequential visual tabs (e.g., Selecting Image #11, Image #12, and Image #13).
* **String Assembly:** On the frontend, these selections are instantly concatenated into a unified string payload (`finalPassword`).
* **The Illusion:** To the user, it feels like a completely graphic, textless interaction. To the backend, it arrives as a structured, standard password payload, ensuring maximum compatibility with top-tier encryption libraries.

---

## Core Security Pillars

Despite the creative visual interface on the frontend, the backend adheres strictly to production-ready security principles:

1. **Identity Verification:** Implements defensive querying using Mongoose `findOne` checks to reject duplicate email registrations and validate incoming logins.
2. **Cryptographic Hashing:** Raw visual string combinations are never stored. The system hashes them using **Bcrypt** with an industry-standard salt factor of 10 (`bcrypt.genSalt(10)`).
3. **Stateless Token Management:** Valid logins generate a **JSON Web Token (JWT)** packed with user metadata and role states, expiring automatically in 3 days (`3d`).
4. **Environment Isolation:** System configuration keys and database URIs are entirely decoupled from the codebase using `.env` files to prevent security leaks on public repositories.

---

## Local Setup & Installation

Follow these steps to get the frontend and backend running on your local computer.

### Prerequisite Checklist
* [Node.js](https://nodejs.org/) installed (v16 or higher recommended)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or a local MongoDB instance running

### 1. Clone and Configure the Backend

1. Navigate into your backend directory:
   
```bash
   cd backend
```
2. Install the required Node dependencies:
   npm install express mongoose cors bcrypt jsonwebtoken dotenv

3. Create a file named .env in the root of your backend folder and add your configuration details:

   PORT=5000
   MONGO_URI=your_mongodb_connection_string_here
   JWT_SECRET=your_chosen_super_secure_random_string

node server.js
    Or if you have nodemon installed: npm run dev

### 2. Configure and Run the Frontend

1. Open a new terminal window and navigate to your frontend directory:

   cd frontend
   
3. Install the frontend dependencies:
   npm install axios bootstrap

4. Launch the React development server:
  npm start

5. Open your browser and navigate to http://localhost:3000 to test the application!

## Here's the link to my demo video:
https://drive.google.com/file/d/1N48jU5OHtQlvulsh8ZSVCx0xxseJ2jPF/view?usp=sharing
