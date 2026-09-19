const express  = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDatabase = require('./config/connectDatabase');
const PORT = 3000;

// connect to MongoDB
connectDatabase();

// Middleware 
app.use(express.json());

app.use('/api/v1',userRoutes);


app.listen(PORT,() => {
    console.log("http://localhost:3000");
});
