Proyecto VT Sports

+++++ BackEnd: +++++
Se creará con Postgres para base de datos, Sequelize como ORM y Expres para el servidor. En un principio la base de datos se la trabaja deployada sobre el servicio de Neon Tech.
También va a ser necesario que el servidor quede deployado sobre Render para que se pueda hacer la peticiones del front sin necesidad de levantar el servidor en local.
JWT para la gestión de password.

Las rutas necesarias son:

** Productos **

--> Traer todos los productos.
--> Producto por Id (para ver el detalle del producto).
--> Buscar producto por nombre.
--> Editar producto.
--> Borrar producto. Tiene que ser un borrado lógico para que el producto siga estando en la base de datos.
--> Crear nuevo producto.

** Usuario **

--> Crear Usuario.
--> Modificar datos del usuario.
--> Modificar Password.
--> Login.
--> Logout.
--> Traer datos del usuario por id (ojo solo ver si hace falta).

** Talles **

--> Crear talle.
--> Traer todos los talles.
--> Modificar talle.

** Géneros **

--> Crear género.
--> Traer todos los géneros.
--> Modificar género.

Nota: Las rutas de talles y género solo podran ser utilizadas desde el back, por el momento no se va a relizar un componente en el front para crear, y modificar talles y géneros. En el caso de traer todos los talles y géneros sí se utilizará para la creación del producto.
En casode que el cliente lo solicite más adelante se modificará el front y se le dará la posibilidad de crear y modificar estos puntos.

** Filtros **
Solo en caso de decidir hacer los filtros desde el back:

--> Productos por tipo (remera, pantalon, buzo, etc).
--> Productos por género (masculino, femenino, niño, niña, etc).

+++++ Frontend: +++++
La creación del frontend se va a realizar utilizando React y Redux para el manejo de los estados globales, CSS para dar los estilos. Cabe destacar que esta la posibilida de utilizar bibliotecas para el css como por ejemplo Boostrap, Tailwind, Sass, etc (queda a elección de la persona que hace los estilos).
Utilizaremos Sweet para los estilos de las notificaciones y quitar el clásico alert del navegador.
React Router Dom para establecer las rutas.
JWT para el sistema de login de usuario.

** Estructura de Carpetas **

|
|___ Client
	|
	|___ vtsport
		|
		|___ Views
		|	|
		|	|___ Home
		|	|
		|	|___ Products
		|	|
		|	|___ About
		|	|
		|	|___ Login
		|	|
		|	|___ Dashboard
		|	|
		|	|___ CreateProducts
		|	|
		|	|___ EditProduct
		|
		|___ Components
		|	|
		|	|___ Navbar
		|	|
		|	|___ Footer
		|	|
		|	|___ CardProducts
		|	|
		|	|___ EditProfile
		|	|
		|	|___ ChangePassword
		|	|
		|	|___ DashBoardPanel
		|	|
		|	|___ Filter
		|	|
		|	|___ ProtectedRoutes
		|
		|___ Redux
		|	|
		|	|___ actions.js
		|	|
		|	|___ reducer.js
		|	|
		|	|___ types.js
		|	|
		|	|___ store.js
		|
		|___ AuthProvider


** Rutas Libres **

--> /home
--> /products
--> /about
--> /login

** Rutas Protegidas **

--> /dashboard
--> /createproduct --- Tendria que ver si puede hacerse con el estado en el dashboard.
--> /editproduct

++ Cloudinary: El servicio para el alojamiento de las imágenes será Cloudinary, de principio la versión gratuita y, en caso de que el cliente lo decida, se ampliará la suscripción.

++ Deploy: El deploy del front end se va a realizar con los servicios de vercel.

+++++ Pasos para correr el proyecto +++++

En la raiz de la carpeta vtsport (donde esta el package.json) abrir la consola y escribir "npm start".
No es necesario levantar el back desde el entorno local ya que se va a trabajar con base de datos y servidor deployados.
De ser necesario algún archivo de variables de entorno se actualizará este archivo.