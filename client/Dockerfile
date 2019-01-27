FROM node:11.5-alpine

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

RUN npm i -g @api-platform/client-generator

# Prevent the reinstallation of node modules at every changes in the source code
COPY package.json package-lock.json ./
RUN npm install

COPY . ./

CMD npm run ng serve -- --host 0.0.0.0 --port 3000
