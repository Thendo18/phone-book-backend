FROM node:12.14.1-alpine AS build

WORKDIR /app

COPY ./package*.json ./

RUN npm i

COPY . ./

RUN npm run build && npm prune --production

FROM node:12.14.1-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "dist/main.js" ]