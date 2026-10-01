import { Router } from 'express';
import health from './health.js';

const r = Router();

// Semua endpoint Fase selanjutnya didaftarkan di sini
r.use('/api', health);

export default r;