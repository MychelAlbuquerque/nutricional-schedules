FROM node:alpine

WORKDIR /usr/app/

COPY /package*.json ./

RUN npm install -g nodemon

EXPOSE 3000

CMD [ "npm", "run", "dev" ]