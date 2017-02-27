FROM node:boron

MAINTAINER CompileYouth<CompileYouth@163.com>

# Use Alibaba's NPM mirror
RUN npm set registry https://registry.npm.taobao.org/

# creat workdir
RUN mkdir -p /usr/projects/todo-react
WORKDIR /usr/projects/todo-react

# Install dependencies
COPY package.json /usr/projects/todo-react
RUN npm install --production

# copy other codes and resources
COPY . /usr/projects/todo-react

EXPOSE 8080
# ENTRYPOINT diff CMD CDM can be overrided
CMD [ "npm", "start" ]
