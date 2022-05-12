# TecnoTardes
## _Mejores prácticas de Contenedores_

Este repositorio contiene un API con fines educativos.

## Recursos necesarios

- [JIRA](https://pfc-ti.atlassian.net/jira/dashboards/last-visited)
- [API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
- [Docker](https://www.docker.com)
- [Play with Docker](https://labs.play-with-docker.com)

## Comandos del taller

### #1

```sh
git clone https://github.com/alexbster/demotecnotarde.git
```
### #2

```sh
cd demotecnotarde/api-ts
```
### #3

```sh
docker build -f ./Dockerfile -t demotecnotarde .
docker build -f ./Dockerfile2stage -t demotecnotarde2stage .
docker build -f ./Dockerfile2stageNCC -t demotecnotarde2stagencc .
docker image ls | grep tecnotarde
```

### #4

```sh
docker run -d --name demosinglestage -e "TASK_MANAGER_URL=https://pfc-ti.atlassian.net" -p 3000:8080 demotecnotarde

docker run -d --name demo2stage -e "TASK_MANAGER_URL=https://pfc-ti.atlassian.net" -p 3001:8080 demotecnotarde2stage

docker run -d --name demo2stagencc -e "TASK_MANAGER_URL=https://pfc-ti.atlassian.net" -p 3002:8080 demotecnotarde2stagencc
```

### #5

```sh
curl -X POST 'http://localhost:3000/api/v1/tasks' \
-u 'micorreo@pfcti.com:token' \
-H 'Content-Type: application/json' -d '{ "status": ["Ready"] }'

curl -X POST 'http://localhost:3001/api/v1/tasks' \
-u 'micorreo@pfcti.com:token' \
-H 'Content-Type: application/json' -d '{ "status": ["Ready"] }'

curl -X POST 'http://localhost:3002/api/v1/tasks' \
-u 'micorreo@pfcti.com:token' \
-H 'Content-Type: application/json' -d '{ "status": ["Ready"] }'
```

### #6

```sh
docker exec -it demosinglestage /bin/sh
ls -la
exit

docker exec -it demo2stage /bin/sh
ls -la
exit

docker exec -it demo2stagencc /bin/sh
ls -la
exit
```

### #7

```sh
docker build -f ./Dockerfile2stageContext -t demotecnotarde2stagecontext .

docker run -d --name demo2stagecontext -e "TASK_MANAGER_URL=https://pfc-ti.atlassian.net" -p 3003:8080 demotecnotarde2stagecontext
```

```sh
curl -X POST 'http://localhost:3003/api/v1/tasks' \
-u 'micorreo@pfcti.com:token' \
-H 'Content-Type: application/json' -d '{ "status": ["Ready"] }'
```

### #8

```sh
docker exec -it demo2stage /bin/sh
whoami
mkdir we-are-bad-hackers
ls
exit

docker exec -it demo2stagecontext /bin/sh
whoami
mkdir we-are-bad-hackers
ls
exit
```