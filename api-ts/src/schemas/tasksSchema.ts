import * as Joi from 'joi';

/**
 * Definición de esquema para el modelo TasksSchema
 */
const TasksSchema = Joi.object({
  status: Joi.array().required(),
});  

export { TasksSchema }
