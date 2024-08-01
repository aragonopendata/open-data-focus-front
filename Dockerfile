FROM node:12 AS build

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

CMD node_modules/.bin/ng serve --host 0.0.0.0 --base-href '/servicios/focus/' --disable-host-check

