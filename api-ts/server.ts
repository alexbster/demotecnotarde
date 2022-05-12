import app from './src/app';

const port = process.env.PORT !== undefined ? process.env.PORT : 8080;

process.on('unhandledRejection', (error, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', error);
  // application specific logging, throwing an error, or other logic here
});

let listenServer = app.listen(port, (): void => console.log(`Iniciando API en puerto ${port}`));
export { listenServer } 