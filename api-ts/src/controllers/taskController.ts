import * as express from 'express';
import auth from 'basic-auth';
import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import { interfaces, controller, httpPost, request, response } from 'inversify-express-utils';
import { inject } from 'inversify';
import { TaskService } from '../interfaces';
import { ServiceTypesLocal } from '../ServiceTypes';
import { TaskQry } from '../models';
import { TasksSchema } from '../schemas/tasksSchema';

/**
 * Publica un recurso /tasks
 */
/**
 * @ApiPath({
  path: '/tasks',
  name: 'Permite consultas sobre ... ¡intenta descubrirlo!',
  security: { basicAuth: [] }
})
*/
@controller('/tasks')
class TasksController implements interfaces.Controller {

  private taskService: TaskService;

  /**
   * Genera un TasksController
   */
  public constructor(@inject(ServiceTypesLocal.TaskService) credentialService: TaskService) {
    this.taskService = credentialService;
  }

  /**
   * @swagger
   * 
   * /api/v1/tasks:
   *   post:
   *     description: Tareas, ¿de qué se trata?
   *     requestBody:
   *       description: object
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/TaskQry'
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/definitions/TaskQryResult'
   */
  @httpPost('/')
  private async PostTasks(@request() req: express.Request, @response() res: express.Response): Promise<void> {
    const request: TaskQry = req.body; // Get data from req.body

    const internalCredentialService = this.taskService;
    const validationResult = TasksSchema.validate(request);
    if (validationResult.error) {
      res.status(400).send(JSON.stringify(validationResult.error));
    }
    else{
      try{
        const user = auth.parse(req.headers['authorization'])

        if (!user || !user.name || !user.pass) {
          res.status(401).send({error: 'Unauthenticated'});
        }

        if(!process.env.TASK_MANAGER_URL){
          res.status(500).send({error: 'TASK_MANAGER_URL not defined'});
        }
        else{
          const result = await internalCredentialService.Get(user.name, req.headers.authorization as string, request);
          res.status(200).send(result);
        }
        
      }
      catch(e){
        res.status(500).send({error: (e as Error).message});
      }
    }
  }
}

export { TasksController };