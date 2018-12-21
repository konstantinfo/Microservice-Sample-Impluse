

# Microservice example impulse

This is a nodejs microservice example which you can use to setup your development environment using docker compose.

There are three micro-services:

-  hello - exposes a GET REST API that gives a response message of Hello (http://localhost:17000).
-  hello slug - exposes a GET REST API that gives a response message of Hello and whatever slug passed to it (http://localhost:17001/hello/{slug}).
- post - exposes a POST REST API that takes any body parameters and sends them as a string in response (http://localhost:17002/post/).
  
### Building and running the microservices    

Before you start make sure you have  [Docker Compose](https://docs.docker.com/compose/install/)  installed on your machine.

### Install

Clone the repo by running the following command

```
$ git clone https://github.com/konstantinfo/Microservice-Sample-Impluse.git
```

### Run

To start you application you just need to run the following command

```
$ cd /PATH-TO-MICROSERVICE-SAMPLE-DIRECTORY
$ docker-compose up -d
```
### Test

Give it sometime while composer installs all the dependencies automatically in the folder.

Once it has finished you should be able to access the GET micro-services in your browser or any rest client:
 GET Urls:
 [hello](http://localhost:17000).
 [hello{slug}](http://localhost:17001/hello/{slug}).
 
 POST Url:
  [post](http://localhost:17002/post/).

### Swagger

This [swagger editor](http://localhost:17003/) can also be used to run the micro-services. Go to the editor File -> Import File section and select the desired files from the following:
1. swagger/hello.json (Hello microservice)
2. swagger/hello-slug.json (Hello-Slug microservice)
3. swagger/post.json (Post microservice)

### Individual docker setup
These micro-services are under development stage and use docker-compose to run as a single application. To run these as individual docker image e.g. for Hello micro-service you have to do the following changes to its Dockerfile:

uncomment the following lines 
```
#COPY ./src/package*.json ./

#RUN npm install
#COPY ./src .

#EXPOSE 15000
#CMD ["npm", "start"]
```

and run

```
$ docker build -t <your-username>/hello .
$ docker run -p 17777:15000 -d <your-username>/hello
```
this will make the docker image run and you can see the hello microserivce response on http://localhost:17777/
