FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]
