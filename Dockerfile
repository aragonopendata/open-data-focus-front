# Stage 1: Build
FROM node:12 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN node_modules/.bin/ng build --prod --base-href '/servicios/datoteca/'

# Stage 2: Serve
FROM nginx:1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/servicios/datoteca
EXPOSE 80
