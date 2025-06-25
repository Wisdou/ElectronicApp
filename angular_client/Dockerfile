FROM node:latest AS build
WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli@18
RUN npm ci --force
COPY . .
RUN ng build


FROM nginx:alpine

COPY --from=build /app/dist/angular_project/browser /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]