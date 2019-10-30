# GraphQL and TypeORM Boilerplate by JustinCast

> Nota: En el presente .md se realiza una descripción a grandes rasgos  sobre las carpetas y archivos. **Si se desea una descripción más detallada, el código está documentado  :smile:  **

## Estructura del proyecto

 ![Project Structure](/img/project-structure.png)



### ``src``

- Carpeta donde se encuentran las `entities` y `schemas` así como también  el archivo de entrada del servidor [index.ts]( #index.ts )

### `entities`

- Acá se encuentran las clases (llamadas aquí `entities`) que representan el modelado de la base de datos virtual creada por TypeORM.

### ``resolvers``

- Carpeta donde se encuentran los `resolvers` (manejadores) para cada una de las `Query` especificados en los `schemas`.

### ``schemas``

- En este folder se encuentran todos los `schemas` que son definidos para "permitirle" a **GraphQL** consultar la base de datos virtual creada por TypeORM.

### `node_modules`

- En esta carpeta se encuentran todas las dependencias (librerías) utilizadas en el proyecto.



## Archivos

### `tsconfig.json`

- Este archivo es necesario para configurar el proyecto para permitir la utilización de [TypeScript]( #typescript ). En este archivo se especifican las opciones de transpilación a las que [TypeScript](#TypeScript) accederá cuando se ejecute el comando de transpilación. En nuestro caso, ese comando es [ndm](###ndm), especificado en el archivo [package.json](#package.json).

### `index.ts` | *Archivo de entrada del servidor*

- En este archivo se importan las carpetas [entities](###entities) y [resolvers](###resolvers) así como también el archivo [schemas-index.ts](#schemas-index.ts) el cual es necesario para unir todos los [schemas](###schemas) (archivos `.gql`) en un sólo archivo.

### `schemas-index.ts`

- En este archivo `.ts` se importan todos los archivos `.gql` presentes dentro de la carpeta [schemas](#schemas), con el fin de unir estos en un sólo archivo que será consumido por el servidor.

### `package.json`



## Dependencias (librerías)

### `TypeScript`



### `TypeORM`



## Scripts

### `ndm`