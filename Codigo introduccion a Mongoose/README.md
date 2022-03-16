# Codigo de introduccion a Mongoose
En este codigo se explica como realizar las cuatro operaciones CRUD (*Create, Read, Update, Delete*) utilizando Mongoose, ademas de una explicacion de Schemas y models.

La aplicacion es una aplicacion de NodeJS, y las dependencias a instalar son:
1. `express`
2. `mongodb`
3. `mongoose`
4. `dotenv`
Las variables de entorno que se encuentran en el documento son la URI dividida en donde va la contraseña, la base de datos y la parte final. Otra variable de entorno es la contraseña del usuario de mongoDB del cluster y la ultima es el nombre de la base de datos, asi como el puerto de la aplicacion.

```NPM Config
npm install express mongodb mongoose dotenv
```
Otra dependencia que se instalará es `nodemon`, pero solamente como dependencia de desarrollo. Nodemon sirve para reiniciar el servidor en cada cambio de guardado de fichero.
```NPM Config
npm install nodemon -D
```