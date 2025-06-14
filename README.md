# 🚀 FuturecodeAPI - Developer & User Guide

**👤 Name:** M.A. Maneth Pankaja Hasindu  
**🏫 University of Ruhuna**

> **FuturecodeAPI** is a RESTful API built with **Node.js**, **Express**, **MongoDB**, and **JWT** for secure user authentication and product management.

---

## 🛠️ 1. Project Setup

### ✅ Prerequisites

- Node.js (v14+)
- Express.js
- MongoDB (local or cloud instance)

### 📦 Installation

```bash
# Install dependencies
npm install

# Create .env file based on .env.example
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
PORT=5000

# Start the server
npm run dev

**2. Authentication**
Details on authentication endpoints and how JWT is used.

2.1 *POST /register*
Registers a new user.

-Request

[POST](http://localhost:3000/api/users/register)
{
"username": "KamalPerera",
"password": "securepassword"
}


2.2 *POST /login*
Logs in an existing user and returns a JWT.

-Request

[POST](http://localhost:3000/api/users/login)
{
  "username": "KamalPerera",
  "password": "securepassword"
}


3. **Product Endpoints**

CRUD operations for managing products.

3.1 *POST /products*
Creates a new product. (Requires JWT)

-Headers
Authorization: Bearer <JWT_TOKEN>

-Request
[POST](http://localhost:3000/api/products)
{
  "name": "Mouse",
  "price": 570,
  "quantity": 20
}

3.2 *GET /products*
Lists all products.

-Request
[GET](http://localhost:3000/api/products)


3.3 *GET /product*
Get a specific product details.

-Request
[GET] (http://localhost:3000/api/products/684c65c12fb36e239662e53c)


3.4 *PUT /product*
Updates a specific product.

-Request
[PUT] (http://localhost:3000/api/products/684c65c12fb36e239662e53c)
{
  "price": 4000,
  "quantity": 40
}

3.5 *DELETE /products*
Deletes a specific product.

-Request
[DELETE] (http://localhost:3000/api/products/684c65c12fb36e239662e53c)
