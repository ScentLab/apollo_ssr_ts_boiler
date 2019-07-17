FROM node:10-alpine

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

EXPOSE 5000

WORKDIR /home

RUN npm install -g yarn

CMD ["sh", "-c", "yarn dev"]
