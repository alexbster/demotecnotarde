/**
 * @swagger
 * 
 * definitions:
 *   TaskQry:
 *     description: Es un objeto obviamente
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       status:
 *         type: string[]
 *         example: ['Ready', 'In Progress', 'Done']
 */
export class TaskQry {
  public status: string[];

  /**
   * Crea instancia
   * @param status Colección de estados
   */
  public constructor(status: string[]) {
    this.status = status;
  }
}