import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

import profileRouter from './server/routes/profile';
import skillsRouter from './server/routes/skills';
import projectsRouter from './server/routes/projects';
import experienceRouter from './server/routes/experience';
import statsRouter from './server/routes/stats';
import contactRouter from './server/routes/contact';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser for JSON
  app.use(express.json());

  // Request logger for API requests
  app.use('/api', (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[API ${req.method}] ${req.originalUrl} - ${timestamp}`);
    next();
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'modular-portfolio-api',
      timestamp: new Date().toISOString(),
      routes: [
        '/api/profile',
        '/api/skills',
        '/api/projects',
        '/api/experience',
        '/api/stats',
        '/api/contact'
      ]
    });
  });

  // Mount Modular API routers
  app.use('/api/profile', profileRouter);
  app.use('/api/skills', skillsRouter);
  app.use('/api/projects', projectsRouter);
  app.use('/api/experience', experienceRouter);
  app.use('/api/stats', statsRouter);
  app.use('/api/contact', contactRouter);

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
