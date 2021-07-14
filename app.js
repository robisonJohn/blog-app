import express from 'express';
import logger from 'logger';
import cors from 'cors';

import projectRoutes from './routes/projects.js';

const app = express();

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/api', projectRoutes);

export default app;