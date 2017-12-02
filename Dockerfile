FROM node:9.2.0
ADD . /code
WORKDIR /code
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

