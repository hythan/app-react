FROM node

WORKDIR /react-app

COPY . .

RUN npm install

EXPOSE 3080

