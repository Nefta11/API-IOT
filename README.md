API-IOT
Esta API fue desarrollada en el contexto del curso de Node.js y Smart Manufacturing, destacando la integración de tecnologías específicas para el Internet de las Cosas (IoT). La arquitectura MVC y el uso de diversas herramientas y frameworks son fundamentales para su funcionamiento.

Características Principales
Node.js y Express: La API utiliza Node.js y su framework Express para el desarrollo del backend, facilitando la creación de rutas y la gestión de solicitudes HTTP.
Express: Adopta el patrón de diseño Modelo Vista Controlador (MVC) para una estructura organizada y eficiente.
EJS: Utiliza EJS para la generación dinámica de contenido en el frontend.
Bootstrap: Incorpora Bootstrap para un diseño moderno y responsivo.
Base de Datos
MongoAtlas: La base de datos se aloja en un clúster en MongoAtlas, aprovechando las ventajas de MongoDB, una base de datos NoSQL.
Base de Datos NoSQL: Se emplea una base de datos NoSQL, específicamente del tipo documental.
Operaciones CRUD Limitadas: La API actualmente ofrece operaciones de lectura e inserción en la base de datos.
Integración con IoT
Arduino IDE y C++: El código de la tarjeta se realizó en Arduino IDE utilizando el lenguaje de programación C++.
Tarjeta Nodemcu Wifi Esp8266: Se conecta un sensor de temperatura a la Tarjeta Nodemcu, registrando los datos de temperatura y humedad.
Conexión a la Base de Datos: Los datos recolectados son enviados a la base de datos en MongoAtlas y almacenados para su posterior análisis.