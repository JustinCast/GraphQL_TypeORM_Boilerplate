# GraphQL and TypeORM Boilerplate by JustinCast

> Nota: En el presente .md se realiza una descripción a grandes rasgos  sobre las carpetas y archivos. **Si se desea una descripción más detallada, el código está documentado  :smile:  **

# Tabla de contenidos

- [Estructura del proyecto](#Estructura-del-proyecto)
  - [src](#src)
  - [entities](#entities)
  - [resolvers](#resolvers)
  - [schemas](#schemas)
  - [node_modules](#node_modules)

- [Archivos](#Archivos)
  - [tsconfig.json](#tsconfig.json)
  - [index.ts](#index.ts)
  - [schemas-index.ts](#schemas-index.ts)
  - [package.json](#package.json)
- [Dependencias](#Dependencias)
  - [TypeScript](#TypeScript)
  - [TypeORM](#TypeORM)
- [Scripts](#Scripts)
  - [ndm](#ndm)

## Estructura del proyecto



 ![Project Structure](img/project-structure.png)



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

- Este archivo es necesario para configurar el proyecto para permitir la utilización de [TypeScript]( #typescript ). En este archivo se especifican las opciones de transpilación a las que [TypeScript](#TypeScript) accederá cuando se ejecute el comando de transpilación. En nuestro caso, ese comando es [ndm](#ndm), especificado en el archivo [package.json](#package.json).

### `index.ts`

- En este archivo se importan las carpetas [entities](#entities) y [resolvers](#resolvers) así como también el archivo [schemas-index.ts](#schemas-index.ts) el cual es necesario para unir todos los [schemas](#schemas) (archivos `.gql`) en un sólo archivo.

### `schemas-index.ts`

- En este archivo `.ts` se importan todos los archivos `.gql` presentes dentro de la carpeta [schemas](#schemas), con el fin de unir estos en un sólo archivo que será consumido por el servidor.

### `package.json`

- Archivo donde se encuentra la especificación de versiones de dependencias, especificación de [Scripts](#scripts), información del desarrollador y demás.

## Dependencias

### `TypeScript`

- Superset de JavaScript  que nos permitirá una sintaxis mucho más OO, genérica. Además, para el uso de decoradores, es pertinente utilizar TypeScript. Si desea conocer más, puede acceder a [typescriptlang.org]( https://www.typescriptlang.org/ )

### `TypeORM`

- ORM utilizado en el proyecto. Si desea conocer más, puede acceder a [typeorm.io](https://typeorm.io/#/ )

### `graphql-yoga`

- Dependencia necesaria para crear un servidor que nos permita utilizar **GraphQL** y **TypeORM**.

### `pg`

- Driver de conexión necesario para conectarse con una base de datos PostgreSQL.
###  `reflect-metadata`

- Librería necesaria para que **TypeORM** utilice decoradores.
### `nodemon`

- Librería necesaria para escuchar los cambios en el archivo [index.ts](#index.ts) y levantar el servidor.

## Scripts

### `ndm`

- Script que le indica a **nodemon** levantar el servidor.