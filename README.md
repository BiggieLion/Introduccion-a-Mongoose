# Introduccion a Mongoose
## ¿Qué es MongoDB?

[MongoDB](https://www.mongodb.com/es) es una base de datos NoSQL (Not Only SQL) y por ende no relacional que es utilizado para proyectos web, aplicaciones mobiles, entre otras aplicaciones.
MongoDB esta pensado en ser utilizado para Big Data, ya que dentro de las soluciones ofrecidas por MongoDB estan el ofrecer servicios en la nube a traves de clusters (De hecho, el termino *mongo* viene del termino en ingles *humongous* que significa *enorme*).

A diferencia de las bases de datos relacionales, MongoDB es una base de datos basado en documentos, esto significa que a diferencia de las base de datos relacionales donde cada elemento a guardar se representa a traves de una fila de una tabla, un elemento de MongoDB se representa como un objeto tipo JSON  denomindao **documento** 

![Ejemplo de un documento de una base de datos en MongoDB](https://sitiobigdata.com/wp-content/uploads/2017/12/MongoDB-Arquitectura-y-modelo-de-datos.png).

Tambien a diferencia de las base de datos SQL que almacenan sus filas en tablas, MongoDB almacena sus documentos en *colecciones*, y dichas colecciones son almacenadas en una base de datos.

![Modelo de una base de datos](https://www.ramoncarrasco.es/sites/default/files/BaseConocimiento/EstructuraDatosMongoDB.png).

## ¿Qué es mongoose?
[Mongoose](https://mongoosejs.com/) es un Objeto Mapeador de Documentos (*Object Document Mapper*) que, entre otras cosas, nos permite crear interfaces para gestionar, base de datos, colecciones y documentos.

Las funcionalidades de mongoose estan desde la conexión a una base de datos, hasta la creación de *esquemas* y *modelos*, los cuales nos permiten desarrollar un sistema fuertemente tipado para los campos de una colección, parecido a Typescript.

### Esquema.
Las bases de datos SQL crean esquemas de documentos al momento de crear la tabla.
```sql
CREATE TABLE Empleado (
  empleado_clave INT NOT NULL,
  empleado_nombre VARCHAR(50) NOT NULL,
  empleado_departamento VARCHAR(50) NOT NULL,
  empleado_telefono VARCHAR(50) DEFAULT 'Sin telefono'
);
```
En mongoose, un esquema es un modelo de datos de un documento, donde su proposito es crear un modelo fuertemente tipado de los datos a manejar.
```javascript
const {Schema, model} = require('mongoose');
const empleadosEsquema = new Schema ({
  clave: { type: Number, required: true },
  nombre: { type: String, required: true },
  departamento: { type: String, required: true },
  telefono: { type: String, default: "Sin telefono" }
});
```
La ventaja de definir un esquema es que podemos definir los tipo de datos a como queremos manejarlos en nuestra base de datos, eliminando la posibilidad de que se anexen diferentes tipos a nuestros campos.

Los tipos que maneja un esquema de mongoose son:
- `String`: Para cadena de caracteres.
- `Number`: Para números de cualquier tipo, sean enteros, flotantes, etc.
- `Date`: Para almacenar fechas.
- `Buffer`: Para guardar archivos binarios.
- `Mixed`: Para guardar cualquier tipo de dato.
- `ObjectId`: Para guardar identificadores unicos.
- `Boolean`: Para guardar `true` o `false` (tambien acepta valores del tipo `'true'`, `1`, `'1'` y `'yes'` y sus valores contrarios a estos para falsos).
- `Arrays`: Para guardar arreglos de todos los tipos anteriores (Si queremos guardar un array de strings la sintaxis seria `[String]`).

### Modelos.
Un modelo es un constructor compilado a partir de un esquema, siendo un documento una instancia del modelo creado.

La manera en que podemos crear un documento es a travez de mongoose
```javascript
const mongoose = require('mongoose');
const esquemaEjemplo = new Schema ({ ... datos ... });
const modeloEjemplo = mongoose.model('ejemplo', esquemaEjemplo);
```
El primer atributo de la funcion model es el nombre singular de de la colección, pero Mongoose en automatico busca el nombre de la coleccion en plural y en letras minusculas del nombre de la coleccion en la base de datos.

Se recomienda que si se tiene una conexión personalizada se utilice esa conexión para crear el modelo en vez del objeto `mongoose`.
```javascript
const mongoose = require('mongoose');
const conexion = mongoose.connect('http://localhost/bdejemplo'); //Se realiza la conexion a una base de datos ya creada.
const esquemaEjemplo = new Schema ({ ... datos ... });
const modeloEjemplo = conexion.model('ejemplo', esquemaEjemplo); //Se crea el modelo utilizando la conexion en vez de mongoose, por si queremos especificar una base de datos.
```
Con el modelo podemos realizar diferentes consultas a la base de datos tales como: 
- **Consultar** con el metodo `.find()`,
- **Borrar** con el metodo `.deleteOne()` si queremos borrar un elemento o `.deleteMany()` si queremos borrar varios elementos,
- **Actualizar** con el metodo `.updateOne()`.
- Si queremos especificar las condiciones podemos utilizar el metodo `.where()` para indicar nuestros parametros.
