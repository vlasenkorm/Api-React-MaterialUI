FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --production
# If you are building your code for production
# RUN npm ci --only=production
# RUN npm run prod
# Bundle app source
COPY . .
# RUN npm run pg
EXPOSE 4000

#CMD ["export", "NODE_ENV=production"]
CMD [ "node", "./src/index.js" ]
