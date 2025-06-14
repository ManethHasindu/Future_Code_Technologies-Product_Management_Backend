require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);  // All routes defined in userRoutes will be prefixed with '/api/users'
app.use('/api/products', productRoutes);    // All routes defined in productRoutes will be prefixed with '/api/products'

app.get('/', (req, res) => res.send('Future Code API is live'));

const PORT = process.env.PORT || 3000; //Server running on port 3000 
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
