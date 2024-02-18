# FROM node:18.19-alpine
# WORKDIR /opt/betcar
# COPY ./dist/apps/betcar/package.json .
# RUN npm install --omit-dev 
# COPY ./dist/apps/betcar .
# CMD ["node", "./main.js"]

FROM node:18.19-slim
RUN apt-get update && apt-get install -y openssl libssl-dev

WORKDIR /opt/betcar
COPY ./dist/apps/betcar/package.json .
RUN npm install --omit-dev

COPY ./dist/apps/betcar/assets/prisma/schema.prisma ./schema.prisma
RUN npx prisma generate --schema schema.prisma 
RUN cp -R ../../node_modules/.prisma ./node_modules && rm -rf ../node_modules 
COPY ./dist/apps/betcar .

CMD [ "node", "./main.js" ]