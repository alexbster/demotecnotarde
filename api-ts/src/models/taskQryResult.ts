/**
 * @swagger
 * 
 * definitions:
 *   TaskQryResult:
 *     description: Contiene la información de las tareas
 *     type: object
 *     required:
 *       - url
 *       - title
 *       - type
 *       - createdBy
 *       - createdAt
 *       - updatedAt
 *       - project
 *       - status
 *       - category
 *     properties:
 *       url:
 *         type: string
 *         example: https://pfc-ti.atlassian.net/browse/RIUK-0001
 *       title:
 *         type: string
 *         example: Esta es una tarea para Riuk
 *       type:
 *         type: string
 *         example: Epica|Tarea|Bug|Otro
 *       createdBy:
 *         type: string
 *         example: Light Yagami
 *       createdAt:
 *         type: Date
 *         example: 2021-01-18T11:31:56.286-0600
 *       updatedAt:
 *         type: Date
 *         example: 2022-02-15T11:31:56.286-0600
 *       project:
 *         type: string
 *         example: Death Note
 *       status:
 *         type: string
 *         example: READY
 *       category:
 *         type: string
 *         example: To Do
 */
export class TaskQryResult {
  public url: string;
  public title: string;
  public type: string;
  public createdBy: string;
  public createdAt: Date;
  public updatedAt: Date;
  public project: string;
  public status: string;
  public category: string;

  /**
     * Crea instancia
     * @param url Url que permite identificar una tarea
     * @param title Título de la tarea
     * @param type Tipo de tarea
     * @param createdBy Quien crea la tarea
     * @param createdAt Fecha de creación
     * @param updatedAt Fecha de actualización
     * @param project Fecha de actualización
     * @param status Estado de la tarea
     * @param category Category de la tarea
     */
  public constructor(url: string, title: string, type: string,
    createdBy: string, createdAt: Date, updatedAt: Date,
    project: string, status: string, category: string) {
    this.url = url;
    this.title = title;
    this.type = type;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.project = project;
    this.status = status;
    this.category = category;
  }
}