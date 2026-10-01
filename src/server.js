import express from 'express';
import helmet from 'helmet';
import { config } from './config.js';
import { corsMiddleware } from './middleware/cors.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import routes from './routes/index.js';

const app = express();

app.set('trust proxy', 1);
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(corsMiddleware);
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'AI Sales Assistant – MyRepublic API',
    health: '/api/health'
  });
});

app.use(routes);
app.use(notFound);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`✅ Server running on port ${config.port} (${config.nodeEnv})`);
  console.log(`   TEST_MODE = ${config.testMode}`);
});