import { injectable } from 'inversify';
import { TaskService } from '../interfaces';
import { TaskQry, TaskQryResult } from '../models/index';
import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

@injectable()
export class TaskServiceImpl implements TaskService {

  /**
   * Permite obtener tareas por estado
   * @param username Nombre de usuario
   * @param authentication Contraseña, ¿seguramente, no?
   * @param request Contiene ciertos filtros
   * @returns resultado de la consulta
   */
  public async Get(username: string, authentication: string, request: TaskQry): Promise<TaskQryResult[]> {

    const issues: TaskQryResult[] = [];
    let startAt = 0;
    const maxResults = 10;
    let total = maxResults;
    let jqlQuery = `assignee='${username}' and (`;

    for (let i = 0; i < request.status.length; i++) {
      jqlQuery += 'status = \'' + request.status[i] + '\'';
      if (i < request.status.length - 1) {
        jqlQuery += ' OR ';
      }
    }

    jqlQuery += ') order by updated';

    for (; startAt <= total; startAt += maxResults) {

      const data = JSON.stringify({
        'jql': jqlQuery,
        'fields': [
          'issuetype',
          'status',
          'creator',
          'project',
          'created',
          'updated',
          'summary'
        ],
        'startAt': startAt,
        'maxResults': maxResults
      });

      const config = {
        method: 'post',
        url: process.env.TASK_MANAGER_URL + '/rest/api/3/search',
        headers: {
          'Authorization': authentication,
          'Content-Type': 'application/json'
        },
        data: data
      };

      try {
        const response = await axios(config);

        if (response.status === 200) {
          total = response.data.total;

          response.data.issues.forEach(issue => {
            issues.push(new TaskQryResult(`${process.env.TASK_MANAGER_URL}/browse/${issue.key}`, issue.fields.summary,
              issue.fields.issuetype.name, issue.fields.creator.displayName,
              issue.fields.created, issue.fields.updated,
              issue.fields.project.name, issue.fields.status.name,
              issue.fields.status.statusCategory.name));
          });
        }
        else {
          throw new Error(response.statusText);
        }
      }
      catch (err) {
        console.error(err);
        if (err as AxiosError) {
          throw new Error((err as AxiosError).message);
        }
        else{
          throw new Error((err as Error).message);
        }
      }

    }

    return issues;


  }
}