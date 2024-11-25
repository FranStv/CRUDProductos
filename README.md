# Consumo de API de Terceros para hacer un CRUD 
## Descripción 
Este proyecto Angular se centra en el consumo de una API de terceros [EscuelaJS API](https://api.escuelajs.co/api/v1/users) para poder hacer Login y [FakeStoreApi](https://fakestoreapi.com/) para poder hacer una tabla de productos. La aplicación incluye una funcionalidad de inicio de sesión que verifica si el correo electrónico y la contraseña corresponden a un usuario dentro de la API y una tabla que muestra los productos que se encuentran en la API, con funcionalidades para poder ver, editar y eliminar productos de la tabla. Editar y Eliminar solo se puede hacer en la tabla pero no en el API.
## Características 
- Consumo de API REST usando `HttpClient`. 
- Autenticación de usuario mediante verificación de correo y contraseña. 
- Manejo de errores y validación de formularios. 
- Tabla de elementos con paginación, filtro y ordenamiento.
- Acciones: Editar, Ver y Borrar.
## Uso
- Iniciar la aplicación con ``` ng serve ```
- Ingresar el correo y contraseña correspondientes a un usuario registrado en el Api
- Toca el menu desplegable al lado del avatar para salir.
- Haz click en la fila de nombre o ID para ordenar la tabla.
- Escribe algo en el campo de texto arriba de la tabla para buscar algo.
- Usa el desplegable y las fechas abajo de la tabla para poder acceder a las funciones de paginación.
- Usa los botones de Ver, Editar y Eliminar para poder ver,editar y borrar un elemento de la tabla.