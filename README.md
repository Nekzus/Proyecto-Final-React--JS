
# <p align="center"><font face = "El Messiri" size = 7>Cines NKMAX</font></p> 
## <p align="center"><font face = "El Messiri">E-Commerce Tickets Películas</font></p>

<p align="center">
<img src="https://i.imgur.com/pAtDXhm.png" 
height="250">
</p>

## Sobre mi 👀

Estudiante de las nuevas tecnologías en [CoderHouse](https://www.coderhouse.com/), me encuentro cursando la carrera de Desarrollador Full Stack. Siempre me gusto la programación, con origen en la rama de la electrónica, decidí convertir el hobby en profesión.


## Descripción del proyecto 🚀

Este trabajo surge como proyecto final del curso de ReactJs. Se basa en un e-commerce de venta de tickets para películas, con la finalidad de que los usuarios puedan adquirirlos en cualquier momento y lugar para ver sus películas favoritas en cines.

Los usuarios deben registrarse e iniciar sesión para poder comprar los tickets. La autenticación y registro se realiza con firebase, en donde están almacenados tanto el catálogo de películas como los usuarios y sus datos.
Los datos almacenados en firebase son:

- Catalogo de películas
- Categorías de películas
- Historial de ordenes de compra
- Usuarios registrados (nombre de usuario y correo electrónico)

La validación del registro e inicio de sesión es gestionada por el autenticador de firebase, en caso de un error se informa al usuario mediante un alert en la parte inferior de los formularios.

Se protegieron y anidaron las rutas mediante react-router-dom, para que el usuario pueda navegar entre las pantallas del carrito y ordenes de compra, siempre y cuando este logueado. En el caso de no haber iniciado sesión, podrá acceder a las pantallas de registro e inicio de sesión, pero no a las de carrito y ordenes de compra (será redirigido a iniciar sesión).

En el caso se fuerce mediante url el intento de ingreso a una ruta que no existe, se mostrará un mensaje de página no existente.

En la pantalla de inicio cualquier usuario puede ver el catálogo de películas, realizar búsquedas por título (implementación de query-string), y filtrar por categorías al acceder al menú desplegable.

Una vez seleccione una película podrá ver el detalle y agregar la cantidad de tickets al carrito, teniendo la opción de terminar la compra o continuar comprando.

Los ítems del carrito son perdurables en el localstorage, por lo que puede modificarse o eliminar ítems en cualquier momento. Una vez se realiza el checkout, se verifica la existencia del stock y se procede con la compra con el correspondiente ajuste de stock en firebase. En caso de no cumplir con el stock, se informa al usuario mediante un alert del ítem con el stock actual y se bloquea la operación.

Para los casos de operación exitosa, se muestra un mensaje de confirmación de compra con el número de orden, y se procede a vaciar el carrito. Todo el registro de las compras es almacenado en firebase, para que el usuario pueda verlo ordenado por fecha en "Mis compras", al loguearse.



## Estado del proyecto 📋

✅ Completo - finalizado.

## Tecnología aplicada 🛠️

- [React JS](https://reactjs.org/) [(v17.0.2)](https://reactjs.org/) - Librería base del proyecto
- [React Bootstrap](https://react-bootstrap.github.io/) [(v2.0.4)](https://react-bootstrap.github.io/) - Utilazada para estilizar la estructura del proyecto
- [React Icons](https://react-icons.github.io/react-icons/) [(v4.3.1)](https://react-icons.github.io/react-icons/) - Utilizada para mejorar la visual de los enlaces mediante iconos
- [React Router Dom](https://reactrouter.com/docs/en/v6) [(v6.0.2)](https://reactrouter.com/docs/en/v6) - Se aplico para la gestion de las rutas
- [React Toastify](https://www.npmjs.com/package/react-toastify) [(v8.1.0)](https://www.npmjs.com/package/react-toastify) - Utilizada para mostrar errores de stock durante el checkout
- [Firebase](https://firebase.google.com/) [(v9.6.1)](https://firebase.google.com/) - Base de datos utilizada para almacenar los datos y gestionar la autenticacion de los usuarios
- [Query String](https://www.npmjs.com/package/query-string) [(v7.1.0)](https://www.npmjs.com/package/query-string) - Utlizada para la gestion de los parametros de la url durante las busquedas por titulo
- [Node Sass](https://www.npmjs.com/package/node-sass) [(v6.0.1)](https://www.npmjs.com/package/node-sass) - Utilizada para la gestión de los estilos de ventanas, enlaces, etc.


## Vista previa del proyecto (demo) 📦

🌎 Pueden ver la web desplegada funcionando [aquí](https://dbcinenkmax-17010.web.app/), utilizando el hosting de Firebase.

### Usuario de prueba

- E-mail

  ```sh
  elonmusk@starlink.com
  ```

- Contraseña
  ```sh
  123456
  ```
  
### <ins>Login de usuario
<p align="center">
<img src="https://i.imgur.com/2goK4BC.gif" 
height="400">
</p>

### <ins>Generación de compra
<p align= "center">
<img src="https://i.imgur.com/9YKqnfp.gif" 
height="400">
</p>

## Capturas de pantalla 📷

<p align="center">
<img src="https://i.imgur.com/WcpWar5.png" 
height="300" width="400">
<img src="https://i.imgur.com/KeGuOjP.png" 
height="300" width="400">
<img src="https://i.imgur.com/xfWRKtg.png" 
height="300" width="400">
<img src="https://i.imgur.com/dnf3BU9.png" 
height="300" width="400">
<img src="https://i.imgur.com/U9xypnE.png" 
height="300" width="400">
<img src="https://i.imgur.com/FZxAiGK.png" 
height="300" width="400">
<img src="https://i.imgur.com/WazfrJY.png" 
height="300" width="400">
<img src="https://i.imgur.com/0JqIDj4.png" 
height="300" width="400">
<img src="https://i.imgur.com/a4dbjZl.png" 
height="300" width="400">
</p>

## Autoría ✒️

- Mauricio Ortega - Desarrollo y programación
  
## Licencia 📄

- ©️Copyright 2021 [`NEKZUS`](https://www.linkedin.com/in/mauricio-sebasti%C3%A1n-ortega-71b43788).

