FROM node:20-alpine as build

# Build the react app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ARG REACT_APP_DB_SERVER
ENV REACT_APP_DB_SERVER=$REACT_APP_DB_SERVER
RUN npm run build

# Serve the app with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

