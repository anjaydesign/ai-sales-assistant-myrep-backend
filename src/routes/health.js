import { Router } from 'express';
import { config } from '../config.js';

const r = Router();

r.get('/health', (req, res) => {
  res.json({
    ok: true,
    service: 'ai-sales-assistant-myrep',
    version: '0.1.0',
    phase: 'FASE 2',
    env: config.nodeEnv,
    testMode: config.testMode,
    timeUTC: new Date().toISOString(),
    timeWIB: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
    uptime: Math.round(process.uptime())
  });
});

export default r;