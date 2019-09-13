# base image
FROM node:12.6.0-alpine

RUN apk add --update npm
RUN apk add --update git openssh
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1
RUN npm install react-bootstrap bootstrap
RUN npm install @material-ui/core
RUN npm install @material-ui/icons
RUN npm install react-swipeable-views
RUN npm install --save mdbreact

# start app
CMD ["npm", "start"]
