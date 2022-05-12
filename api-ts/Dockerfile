FROM node:12-alpine
RUN apk --no-cache add curl
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
EXPOSE 8080
ENTRYPOINT ["npm", "start"]