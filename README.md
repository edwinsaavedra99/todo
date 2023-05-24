# README #
#Descripción Funcional:
Este aplicativo emula una lista de tareas en formato TODO, se puede:

* Agregar nuevas tareas
* Editar las tareas creadas
* Marcar las tareas como completadas
* Eliminar tareas

DEMO FUNCIONAL: https://develop.d2oplqelz9fwxk.amplifyapp.com/

# Run APP

`npm install`

`npm run dev`

Local: http://127.0.0.1:5173/


Se emulo el comportamiento de un .env en el archivo envd.ts este puede ser reemplazado para correr un API local

`export const api = 'https://polar-cove-32999.herokuapp.com';`

En caso no se tenga vue 3

`npm install vue@3.3.0`
o
`npm install vue@latest`

#Descripción tecnica:

El proyecto es una aplicación web desarrollada en Vue.js 3, haciendo uso de varias tecnologías complementarias como Axios, Vuetify, SCSS y TypeScript. A continuación, se presenta una descripción técnica de cada una de estas tecnologías en el contexto del proyecto:

* Vue.js 3: El proyecto se basa en Vue.js 3, un framework de JavaScript progresivo para la construcción de interfaces de usuario. Vue.js permite la creación de componentes reutilizables y proporciona una arquitectura sólida para desarrollar aplicaciones web modernas y dinámicas.
* Axios: Se utiliza la biblioteca de cliente HTTP Axios para realizar solicitudes HTTP desde la aplicación Vue.js. Axios facilita la comunicación con el servidor para enviar y recibir datos, y ofrece características como el manejo de promesas y el soporte para interceptores de solicitudes y respuestas.
* Vuetify: Se emplea Vuetify, un framework de componentes de interfaz de usuario basado en Material Design, para desarrollar una interfaz de usuario atractiva y coherente. Vuetify proporciona una amplia gama de componentes predefinidos y personalizables que permiten crear rápidamente una apariencia visualmente agradable y responsive.
* SCSS: El preprocesador CSS utilizado en el proyecto es SCSS (Sass). SCSS permite utilizar variables, anidamiento de estilos, mixins y otras características avanzadas para facilitar el desarrollo y el mantenimiento de los estilos de la aplicación.
* TypeScript: El proyecto se desarrolla utilizando TypeScript, un lenguaje de programación tipado que se compila a JavaScript. TypeScript brinda beneficios como el soporte de tipos estáticos, autocompletado en tiempo de desarrollo y detección temprana de errores, lo que mejora la calidad y robustez del código.

Estas tecnologías en conjunto proporcionan una base sólida y eficiente para el desarrollo de la aplicación Vue.js 3. La combinación de Vue.js, Axios, Vuetify, SCSS y TypeScript permite crear una aplicación web moderna, con una interfaz atractiva y una gestión eficiente de las solicitudes HTTP, mejorando así la experiencia del usuario final.

La API utilizada es esta: https://polar-cove-32999.herokuapp.com/tasks

El codigo de la api tambien puede encontrarse en: https://github.com/edwinsaavedra99/apitodo
En caso se quiera explorar el funcionamiento en local de la API clonar el repositorio 'apitodo' y ejecutar main.py se tiene una base de datos precargada sqlite