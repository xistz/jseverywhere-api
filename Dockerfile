FROM node:12.16.2-alpine

WORKDIR /app

RUN apk add --update --no-cache build-base \
                                python-dev

COPY package.json .
COPY package-lock.json .

RUN npm ci