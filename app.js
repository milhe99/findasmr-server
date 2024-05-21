const express = require('express');
const app = express();

// Use JSON
app.use(express.json());

// Enable CORS
const corsOptions = {
    origin: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_ORIGIN : process.env.LOCAL_ORIGIN,
    optionsSuccessStatus: 200
};

// Setup routes
app.use('/api/categories', require('./src/routes/category-routes'));
app.use('/api/videos', require('./src/routes/video-routes'));
app.use('/api/users', require('./src/routes/user-routes'));
app.use('/api/auth', require('./src/routes/auth-routes'));
app.use('/api/triggers', require('./src/routes/trigger-routes'));
app.use('/api/tags', require('./src/routes/tag-routes'));
app.use('/api/asmrist', require('./src/routes/asmrist-routes'));

module.exports = app;