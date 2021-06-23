FROM node:13-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g angular
RUN npm install
COPY ./ /app/
RUN npm run build
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html*
COPY --from=build /app/dist/ca-frontend/ /usr/share/nginx/html/
