# node-docker-apirest

Bienvenido a la API rest dockerizada. Para esta API se utiliza NodeJs para su creacion, por lo tanto el lenguaje base es Javascript




**Levantamiento del entorno de desarrollo**

 1. Usando Docker


## Levantamiento del entorno de desarrollo con Docker

**Nota**
> docker engine debe estar instalado en el sistema.

Revisa la documentación de [Docker engine](https://docs.docker.com/engine/install/) para más información.

**Steps**

1. Ingresa al directorio
	

    cd docker-node-app

2. Construye el contenedor.

    $ sudo docker build -t node-restapi .
   
3. Inícialo.

> Para recibir el log en CLI

    $ sudo docker run -it -p 8090:8000 node-restapi

## **Metodos del API**

**GET**
endpoint: '/'
response:

    {
      "messagge": "Hello World. API Rest funcionando!"
    }


**PUT**
En este método le debes pasar un nombre como parámetro al Endpoint para obtener un saludo!

endpoint: '/api/sps/helloworld/v1/:name'
response:

    {
        "messagge": "hello {}. Bienvenido a mi API"
    }



