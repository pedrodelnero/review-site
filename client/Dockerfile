FROM node:16-alpine as builder
RUN npm install -g nodemon
WORKDIR /app
COPY package*.json /app/
RUN npm install && mv /app/node_modules /node_modules
COPY . /app
CMD [ "npm", "run", "start" ]

