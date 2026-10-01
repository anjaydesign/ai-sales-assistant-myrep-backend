export function notFound(req, res){
  res.status(404).json({ ok:false, error:'Not Found', path:req.path });
}

export function errorHandler(err, req, res, _next){
  const status = err.status || 500;
  console.error('[ERROR]', err.message);
  res.status(status).json({
    ok: false,
    error: (status === 500 && process.env.NODE_ENV === 'production')
      ? 'Internal Server Error'
      : err.message
  });
}