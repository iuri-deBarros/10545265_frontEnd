FROM node:12.7-alpine as build
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY ./ /app/
RUN npm run build
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/ca-frontend/ /usr/share/nginx/html/