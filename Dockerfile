# Build node app
FROM node:13 as node

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]
