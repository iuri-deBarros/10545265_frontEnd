<<<<<<< HEAD

FROM node:12.7-alpine as build
=======
FROM node:12.7-alpine AS build
>>>>>>> 0a46e35f93550ffa74e30dc035a032799bdb165f
WORKDIR /app
COPY package*.json ./

RUN npm install
<<<<<<< HEAD
RUN npm install mongodb --save
COPY ./ /app/
RUN npm run build
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/ca-frontend/ /usr/share/nginx/html/
=======
COPY . .
RUN npm run build
FROM nginx:1.17.1-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ca-frontend /usr/share/nginx/html
>>>>>>> 0a46e35f93550ffa74e30dc035a032799bdb165f
