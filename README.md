# Node.js Development Environment

A Node.js development environment using Docker Compose.

## Getting Started

Download and install Docker [Mac](https://www.docker.com/docker-mac) or [Windows.](https://www.docker.com/docker-windows)

Clone this repository:

```
git clone https://github.com/jasonjlock/node-env.git
```

Change directories to the new repository:

```
cd node-env
```

## How To Use

Start the Docker containers:

> Running this step for the first time, Docker builds the container images.
> This process can take a while.

```
docker-compose up
```

this starts Nginx and Node.js containers. Nginx is reverser proxy
passing requests to the Node.js server.

## What Next

While the containers are running, visit http://localhost in your browser.

Add [dependencies](https://docs.npmjs.com/files/package.json#dependencies), write some code, and run it:
```
docker exec -it nodeenv_app_1 node your_code.js
```

Stop the running containers:
```
docker-compose down
```

## Helpful Resources

* [Docker Compose](https://docs.docker.com/compose/reference/)
* [Docker Cleanup Commands](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)
* [Nginx Reverse Proxy](https://www.nginx.com/resources/admin-guide/reverse-proxy/)



