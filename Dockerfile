FROM node:alpine

WORKDIR /usr/app/backend

COPY . /usr/app 

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]