FROM node:14-alpine

USER node

WORKDIR /home/node/app

COPY package.json ./
COPY package-lock.json ./

RUN npm cache clean --force
RUN npm install

COPY . ./

EXPOSE 4343

CMD sh -c "npx prisma migrate dev && nodemon src/infra/api/server.ts"
