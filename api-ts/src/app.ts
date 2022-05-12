import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import './controllers/index';
import { ServicesConfigContainer } from './services.config';

const options = {
  explorer: true,
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Consulta de tareas', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'Permite consultar tareas de una persona', // Description (optional)
    },
    produces: ['application/json'],
    consumes: ['application/json'],
  },
  // Path to the API docs
  apis: [
    './src/controllers/*.ts',
    './src/models/*.ts'
  ],
};
const swaggerSpec = swaggerJSDoc(options);

let server = new InversifyExpressServer(ServicesConfigContainer, null, { rootPath: "/api/v1" });

server.setConfig((app): void => {

  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());

  const docsJsonPath = '/api-docs/swagger.json';

  app.get(docsJsonPath, (req, res): any => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  });

  app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));

});

const serverApplication = server.build();

export default serverApplication;