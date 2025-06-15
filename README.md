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
```
### 🔐 2. Authentication
JWT is used for the Authentication.


### 👤 3. User Endpoints

### 📌 3.1 *User Registration*  
Registers a new user.
```bash
-Request

[POST](http://localhost:3000/api/users/register)
{
"username": "KamalPerera",
"password": "securepassword"
}

```
### 📌 3.2 *User login*
Logs in an existing user and returns a JWT.

```bash
-Request

[POST](http://localhost:3000/api/users/login)
{
  "username": "KamalPerera",
  "password": "securepassword"
}
```

### 📦 4. Product Endpoints

CRUD operations for managing products.

### 📌 4.1 *Create a Product*
Creates a new product. (Requires JWT)

```bash
-Headers
Authorization: Bearer <JWT_TOKEN>

-Request
[POST](http://localhost:3000/api/products)
{
  "name": "Mouse",
  "price": 570,
  "quantity": 20
}
```
### 📌 4.2 *Get all Products*
Lists all products.

```bash
-Headers
Authorization: Bearer <JWT_TOKEN>

-Request
[GET](http://localhost:3000/api/products)
```

### 📌 4.3 *Get a Product using product_id*
Get a specific product details.
```bash
-Headers
Authorization: Bearer <JWT_TOKEN>

-Request
[GET](http://localhost:3000/api/products/684c65c12fb36e239662e53c)
```

### 📌 4.4 *Edit Details of a Product*
Updates a specific product.
```bash
-Headers
Authorization: Bearer <JWT_TOKEN>

-Request
[PUT](http://localhost:3000/api/products/684c65c12fb36e239662e53c)
{
  "price": 4000,
  "quantity": 40
}
```
### 📌 3.5 *Delete a Product*
Deletes a specific product.
```bash
-Request
[DELETE](http://localhost:3000/api/products/684c65c12fb36e239662e53c)
```
