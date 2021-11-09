const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(StatusCodes.BAD_REQUEST).json({
     message: 'Entradas inválidas, tente novamente' });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).json(
     { message: err.message },
);
  }

  console.error(err);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: {
      message: `Erro interno no servidor: ${err.message}`,
    },
  });
};