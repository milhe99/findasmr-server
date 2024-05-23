const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./src/models/associations');

// Use JSON
app.use(express.json());

// Enable CORS
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Setup routes
app.use('/api/categories', require('./src/routes/category-routes'));
app.use('/api/videos', require('./src/routes/video-routes'));
app.use('/api/users', require('./src/routes/user-routes'));
app.use('/api/auth', require('./src/routes/auth-routes'));
app.use('/api/triggers', require('./src/routes/trigger-routes'));
app.use('/api/tags', require('./src/routes/tag-routes'));
app.use('/api/asmrist', require('./src/routes/asmrist-routes'));
app.use('/api/search', require('./src/routes/search-routes'));
app.use('/api/categoryvideos', require('./src/routes/category-video-routes'));
app.use('/api/tagvideos', require('./src/routes/tag-video-routes'));
app.use('/api/triggervideos', require('./src/routes/trigger-video-routes'));
app.use('/api/uservideos', require('./src/routes/user-video-routes'));

module.exports = app;