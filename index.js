
const express = require('express');
var bodyParser = require('body-parser');
const dotenv= require('dotenv');
const route =  require('./router/router');
dotenv.config(); 
const { default: mongoose } = require('mongoose');  
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// mongoose.connect("mongodb+srv://jitendraPatel:8teXAne2Ql9IhXs6@cluster0.j4wsmav.mongodb.net/user_project")
//     .then(() => console.log('mongodb is connected'))
//     .catch(() => console.log('mongodb is not connected'));
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('mongodb is connected'))
    .catch(() => console.log('mongodb is not connected'));
    app.use((req, res, next) => {
        res.status(404).json({ message: 'Not Found' });
    });
    app.use((err, req, res, next) => {
        console.error(err.stack); // Log the error for debugging (remove in production)
        res.status(500).json({ message: 'Internal Server Error' });
    });
     
    app.use('/api', route);


    const PORT = process.env.PORT || 3000; 

    app.listen(PORT, function () {
    console.log('Express app running on port ' + (PORT))
});




// import express from 'express';
// import bodyParser from 'body-parser';
// import userRoutes from './routes/userRoutes';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.use('/api', userRoutes);

// // Handling non-existing endpoints
// // app.use((_req, res) => {
// //   res.status(404).json({ message: 'Endpoint not found' });
// // });

// // Error handling middleware
// app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

 