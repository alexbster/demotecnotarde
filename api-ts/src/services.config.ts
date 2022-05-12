import 'reflect-metadata';
import { ServiceTypesLocal } from './ServiceTypes';
import { TaskService } from './interfaces';
import { TaskServiceImpl } from './services';
import { Container } from 'inversify';

let ServicesConfigContainer = new Container();

ServicesConfigContainer.bind<TaskService>(ServiceTypesLocal.TaskService).to(TaskServiceImpl);

export { ServicesConfigContainer }