
# E-Commerce: Cines NKMAX 

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2Fmini_LogoNkMaxShadowMin.png?alt=media&token=55faec47-0f5f-4d00-b59c-4591a0e1beb2" 
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

### <ins>Login de usuario
<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2FCines%20NkMax%20-%20Login.gif?alt=media&token=17dc2728-e8bf-49ad-aac5-3635799d3451" 
height="400">
</p>

### <ins>Generación compra
<p align= "center">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2FCines%20NkMax%20-%20Order.gif?alt=media&token=dcc82e63-25c6-4651-964d-6f90ea7376cb" 
height="400">
</p>

## Capturas de pantalla 📷

<p align="center">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F1-mini_Inicio.png?alt=media&token=3d0e3bf3-54f9-4d9c-b469-1e5428b8818f" 
height="300" width="400">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F4-mini_Catalog.png?alt=media&token=075a04c3-b2d6-4717-a97a-7efa87e00574" 
height="300" width="400">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F2-mini_Login.png?alt=media&token=fd57b517-9f23-4abd-b038-6f80b2041dce" 
height="300" width="400">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F3-mini_Register.png?alt=media&token=9d4329bc-0b14-461e-a646-e7be006c170c" 
height="300" width="400">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F5-mini_Item%20Detail.png?alt=media&token=238a2ca1-c8e1-424c-9fdb-f27378600939" 
height="300" width="400">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F6-mini_Item%20Detail%202.png?alt=media&token=05d323f2-350f-4f0a-8e12-f0fa38fc2688" 
height="300" width="400">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F7-mini_cart.png?alt=media&token=9d3eb1f9-04aa-46ac-bcbf-cfde223f9f14" 
height="300" width="400">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F8-mini_Order%20list.png?alt=media&token=623fefac-225d-40c0-8fe0-e4365a1a37ec" 
height="300" width="400">
<img src="https://firebasestorage.googleapis.com/v0/b/dbcinenkmax-17010.appspot.com/o/Readme.md%2F9-mini_Offcanvas.png?alt=media&token=1281065a-89d5-4a02-95f9-cdba47f8b3a9" 
height="300" width="400">
</p>

## Autoría ✒️

- Mauricio Ortega
  
## Licencia 📄

- ©️Copyright 2021 [`NEKZUS`](https://github.com/Nekzus).

