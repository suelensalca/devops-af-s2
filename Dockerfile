FROM node:20.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# docker build -t my-nodejs-app .
# docker run -p 3000:3000 my-nodejs-app