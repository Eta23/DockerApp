FROM node:16.10.0-alpine

WORKDIR /app

# This will add node modules to path so they can execute
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]