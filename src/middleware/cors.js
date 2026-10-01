import cors from 'cors';

const allowed = (process.env.CORS_ORIGINS || '*')
  .split(',').map(s => s.trim()).filter(Boolean);

export const corsMiddleware = cors({
  origin(origin, cb){
    if(!origin) return cb(null, true);                     // curl / server-to-server
    if(allowed.includes('*')) return cb(null, true);       // dev
    if(allowed.includes(origin)) return cb(null, true);    // whitelist
    return cb(new Error('CORS not allowed: ' + origin));
  },
  credentials: true
});