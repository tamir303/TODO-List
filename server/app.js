import express from 'express';

// Create an Express application
const app = express();

// Import middleware functions and user routes
import middlewares from './middlewares/middlewares.js';
import userRoutes from './routes/userRoute.js';
import todoRoutes from './routes/todoRoute.js'
import taskRoutes from './routes/taskRoute.js';

/**
 * Sets up the Express application with middleware functions and routes.
 */
app.use(middlewares);

// Mount user routes to the application
app.use('/', userRoutes, todoRoutes, taskRoutes);

export default app;
