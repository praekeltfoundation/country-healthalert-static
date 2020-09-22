# Build node app
FROM node:13 as node

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run export

# Build nginx
FROM nginx:alpine

COPY --from=node app/out /usr/share/nginx/html
