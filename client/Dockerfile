FROM  node:10.12.0-slim

WORKDIR /client
COPY . .
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 3000
