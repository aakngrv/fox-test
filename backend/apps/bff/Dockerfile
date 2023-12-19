FROM node:18.19-alpine
WORKDIR /opt/bff
COPY ./dist/apps/bff/package.json .
RUN npm install --omit-dev 
COPY ./dist/apps/bff .
CMD ["node", "./main.js"]