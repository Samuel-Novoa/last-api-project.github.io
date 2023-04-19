# Creando un CRUD con [ CRA | FireBase ]
En terminal ejecutar
## Instalacion de CRA [ Create React App ]
[Create-React-APP](https://create-react-app.dev/docs/getting-started)
> npx create-react-app {nombre_app}
## Instalacion de axios [ API Controler ]
[Axios DOCS](https://axios-http.com/docs/intro)
> npm i axios
## Instalacion de React-Toastify [ Control de notificacion (POP-Up) ]
[Reac-Toastify NPM](https://www.npmjs.com/package/react-toastify)
[Reac-Toastify DOCS](https://fkhadra.github.io/react-toastify/introduction/)
> npm i react-toastify
## Instalacion de React Promise Tracker 
[React Promise Tracker NPM](https://www.npmjs.com/package/react-promise-tracker)
[React Promise Tracker DOCS](https://lemoncode.github.io/react-promise-tracker/docs/getting-started.html)
> npm install react-promise-tracker --save
## Instalacion de tailwind css
[TailWindCSS](https://tailwindcss.com/docs/installation)
> npm install -D tailwindcss
> npx tailwindcss init
Agregar al archivo creado [ tailwind.config.js ]
> /** @type {import('tailwindcss').Config} */
>module.exports = {
>  content: ["./src/**/*.{html,js}"],
>  theme: {
>    extend: {},
>  },
>  plugins: [],
>}

En el archivo [ src/index.css ] reemplazar todo por
>@tailwind base;
>@tailwind components;
>@tailwind utilities;

## Agregar el proyecto a [ GITHUBPAGES ]
Crear un repositorio y dos branches
Branch #1 [ main ]
Branch #2 [ gh-pages ]