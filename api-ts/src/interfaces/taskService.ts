import { TaskQryResult, TaskQry } from '../models';


/**
 * Define las operaciones utilizadas en los procesos por averguar
 */
export interface TaskService {

  /**
   * Permite obtener tareas por estado
   * @param username Nombre de usuario
   * @param authentication Contraseña, ¿seguramente, no?
   * @param request Contiene ciertos filtros
   * @returns resultado de la consulta
   */
  Get(username: string, authentication: string, request: TaskQry): Promise<TaskQryResult[]>;    
}