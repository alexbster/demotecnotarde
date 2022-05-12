import * as express from 'express';
import 'reflect-metadata';
import { interfaces, controller, request, response, httpGet } from 'inversify-express-utils';
import { SysHealthResult } from '../models';
/**
 * Publica un recurso /sys
 */
/**
 * @ApiPath({
  path: '/sys',
  name: 'Valida estado del servicio',
  security: { basicAuth: [] }
})
*/
@controller('/sys')
class SysController implements interfaces.Controller {

  /**
   * @swagger
   * 
   * /api/v1/sys/health:
   *   get:
   *     description: Estado del servicio
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/definitions/SysHealthResult'
   */
  @httpGet('/health')
  private async GetHealth(@request() req: express.Request, @response() res: express.Response): Promise<void> {
    res.status(200).send(new SysHealthResult('Running'));
  }
}

export { SysController }