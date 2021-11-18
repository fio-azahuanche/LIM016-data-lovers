![portada](pictures/studioghibliall.jpg)

# Data Lovers – Studio Ghibli

## 1. Introducción 📌
Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes
animados como **Mi vecino Totoro**, **El viaje de Chihiro** o
**El castillo ambulante**, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido
varias nominaciones y premios. De todo este fandom hay un grupo que desea poder
interactuar y ver la información de las animaciones y sus personajes.

## 2. Investigación UX 🔍
Para entender mejor qué información podrían necesitar nuestros usuarios,
hicimos una rápida investigación y estos son algunos de los hallazgos:

- Studio Ghibli tiene varias animaciones, para nuestros usuarios es importante
  saber cuáles son.
- Las animaciones tienen directorxs y productorxs. Estxs son las mentes detrás
  de una gran animación. En Studio Ghibli hay directorxs y productorxs que han
  colaborado en la creación de más de una animación. Por ello, es importante
  para nuestro usuario poder conocerlos y saber cuáles son las
  animaciones a las que dieron "vida".
- Las animaciones tienen información relevante para nuestras usuarias, como
  descripción, fecha de lanzamiento, score, director, productor y personajes.
- Cada animación tiene sus personajes, para nuestros usuarios es importante saber cuáles son
- Los personajes tienen características únicas que el usuario quiere saber, como
  nombre, edad, género, especie, etc.
- Las animaciones tienen locaciones y vehículos únicos en cada una. Para
  nuestros usuarios es importante saber cuáles son.
- Adicionalmente a esta información, para nuestros usuarios es importante poder
  ver el top 10 de películas de Studio Ghibli y poder ver, en gráficos estadísticos, las características más relevantes en relación a todo el conjunto de personajes.

## 3. Resumen del proyecto 📝

Este proyecto tiene como finalidad **construir una página web responsive**, dirigido a personas que les gusta el cine, en especial el animado, y quieren estar más informados sobre las películas de Studio Ghibli. Por lo que, se podrá `visualizar` de manera precisa y clara información de todas las películas, contando con información relevente como el año de su estreno, su descripción, el director, productor, personajes, locaciones y vehículos. Toda esta información puede ser manejada por los usuarios, de tal manera que puedan `filtrarla` y `ordenarla` según diversas especificaciones.

## 4. Descripción del proyecto 📎

### ¿Quiénes son los principales usuarios?
Desde fans del cine animado hasta adultos, jóvenes y niños que crecieron viendo la películas de Studio Ghibli, que no recuerdan el nombre específico de las peliculas y desean volverlas a ver o encontrar información detallada.
### ¿Cuáles son los objetivos de los usuarios en relación con esta página?
Que las personas de cualquier edad puedan acceder a la información detallada de las películas del Studio Ghibli.
### ¿Cómo esta página está resolviendo los problemas de los usuarios?
Filtrando, ordenando y buscando la información detallada de cada película según sus diversas necesidades de los usuarios.

### 4.1 Proceso Creativo de Diseño 👩🏻‍🎨🎨

* Estilo

Para el proyecto se optó por la temática de una de las películas de Studio Ghibli, El viaje de Chihiro, ya que vimos el buen contraste de colores que nos permitiría transmitir la información de forma clara y precisa, y que a su vez pueda ser amigable ante la vista de nuestros usuarios, asi ellos puedan tener un rápido reconocimiento de la interfaz de nuestra pagina web.

* Prototipo de baja fidelidad

Estos dos prototipos fueron realizados a mano para tener una idea de la estructura.

Esta sería la vista para celulares:

![prototipo](pictures/prototipoCelular.jpg)

Esta sería la vista para desktop:

![prototipo](pictures/prototipoDataLovers.jpg)

* Prototipo de alta fidelidad

Estos dos prototipos fueron realizados en Figma para aplicar los colores y temática previamente pensados.

Esta sería la vista para desktop: 💻

![prototipoDesktop](pictures/home.jpg)
![prototipoDesktop](pictures/characters.jpg)

Esta sería la vista para celulares: 📲

![prototipoCelular](pictures/androidPrototype.JPG)

### 4.2  Historias de Usuario y Criterios de Aceptación 📢 📝

> HU 1:  🗣️ Yo COMO fan del cine QUIERO ver las portadas de las películas populares de studio ghibli PARA identificar una película que vi y olvide.

 📍 **Criterios de Aceptación:**
- Obtener la buena posición de nuestra imagen de Portada(formato svg).
- Darle buena funcionalidad a nuestro carrusel de portadas de películas populares.

> HU 2:  🗣️ Yo COMO usuario QUIERO ver más películas que estén etiquetadas por año y puntaje PARA poder ver más información de más películas.

 📍 **Criterios de Aceptación:**
- Tener lo botones de búsqueda, Filter By y Sort By.
- Mostrar los posters de las películas en bloque.
- Ponerle la información(Año y puntaje) de la película sobre su poster.

> HU 3:  🗣️ Yo COMO usuario QUIERO ordenar de forma ascendente/descendente PARA guiarme de manera más rápida y verlo de manera cronológica.

 📍 **Criterios de Aceptación:**
- Contar con un selector llamado "Sort By" que contiene las opciones del ordenamiento seleccionado por el usuario.
- Testear la función sort y cumplir con los mínimos requerimientos para los test.

> HU 4:  🗣️ Yo COMO usuario QUIERO filtrar las pelicular por nombre de productor o director PARA estar al tanto de qué películas produjeron.

 📍 **Criterios de Aceptación:**
- Contar con un selector llamado "Filter By" que contiene las opciones de filtrado por director/productor seleccionado por el usuario.
- Testear la función filter y cumplir con los mínimos requerimientos para los test.

> HU 5:  🗣️ Yo COMO usuario QUIERO buscar una película por su nombre PARA ver su información.

 📍 **Criterios de Aceptación:**
- El usuario al ingresar por el teclado va buscando y cuando borra reaparece todos los posters.
- Testear la función search y cumplir con los mínimos requerimientos para los test.

> HU 6:  🗣️ Yo COMO usuario QUIERO poder ver la página en distintos dispositivos PARA tener acceso fácilmente a la información.

 📍 **Criterios de Aceptación:**
- Es adaptable para tablets y celulares.
- En versión celular, se despliega el menú tipo "hamburger".

> HU 7:  🗣️ Yo COMO usuario QUIERO visualizar la recolección de datos en gráficos estadísticos PARA ser un mejor conocedor de las películas de Studio Ghibli.

 📍 **Criterios de Aceptación:**
-  Se puede identificar el top 10 de películas.
-  Correcto entendimiento de las gráficas estadísticas.

### 4.3  Hallazgos del prototipo 📌📢
Gracias al feedback recibido por nuestras compañeras, se identificó que se debía establecer algunas mejoras en los siguientes aspectos:

- Modificar los colores de fondo para no sobrecargar la vista de la página.
- Mejorar el diseño del card de cada personaje, para una mejor adaptación en distintos dispositivos.

Con los hallazgos anteriores, se realizó un nuevo prototipo del card de cada personaje y cambiando los colores de fondo obteniendose el siguiente resultado (sección de la descripción y detalles de cada película).

![prototipoMejorado](pictures/prototype2.jpg)

##  5. Consideraciones Generales 🚨

- Este proyecto se realizó en dupla.

- La interfaz del proyecto está desplegada usando GitHub Pages.

- El tiempo del proyecto fue de `3 semanas.`

![banner](pictures/banner.png)

##  6. Pruebas Unitarias 📝💯

Para las pruebas Unitarias `(tests)`, creamos nuestras propias funciones, así como la configuración necesaria para ejecutar los tests usando el comando `npm test`. Logrando superar la cobertura mínima del **70%** de statements, functions y lines, y un mínimo del **50%** de branches.

## 7. Objetivos de aprendizaje

### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**

- [x] **Modelo de caja (box model): borde, margen, padding**

- [x] **Uso de flexbox en CSS**

### Web APIs

- [x] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [x] **Manipulación dinámica del DOM**

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Arrays (arreglos)**

- [x] **Objetos (key, value)**

- [ ] **Variables (declaración, asignación, ámbito)**

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [x] **Uso de bucles/ciclos (while, for, for..of)**

- [x] **Funciones (params, args, return)**

- [x] **Pruebas unitarias (unit tests)**

- [x] **Módulos de ECMAScript (ES Modules)**

- [x] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages**

- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### UX (User eXperience)

- [x] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [x] **Crear prototipos para obtener feedback e iterar**

- [x] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**

- [ ] **Planear y ejecutar tests de usabilidad**
