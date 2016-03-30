FROM ubuntu:14.04
MAINTAINER stas.ostapenko@gmail.com
RUN apt-get update && apt-get install -y supervisor redis-server nodejs npm nodejs-legacy
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

CMD ["/usr/bin/supervisord"]
EXPOSE 8080
