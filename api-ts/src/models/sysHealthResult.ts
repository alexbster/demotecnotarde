/**
 * @swagger
 * 
 * definitions:
 *   SysHealthResult:
 *     description: Contiene el estado del servicio
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       success:
 *         type: string
 *         example: 'Running'
 */
export class SysHealthResult {
  public status: string;

  /**
   * Crea instancia SysHealthResult
   * @param status indica el estado del servicio
   */
  public constructor(status: string) {
    this.status = status;
  }
}