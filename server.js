import express from 'express';
import connection from './db/connection.js'; 
import helmet from 'helmet';
import cors from 'cors';

// Import routes
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import challengeRoutes from './routes/challengeRoutes.js'

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/challenges", challengeRoutes);

// Connect to the database and start the server
connection.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error('Database connection failed:', err.message);
});
