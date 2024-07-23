FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.8.2

RUN npm install -g @angular/cli

COPY . .

RUN ng build -prod -bh="/servicios/focus/"

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]