<h1 align="center">
    <img src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="200px" />
</h1>

<h2 align="center">
    First challenge, created a simple API Rest!
</h2>

<strong align="center">
    Using the concepts of http requests, responses, middleware.
</strong>

# Requisites

- [Node](https://nodejs.org/en/)
- [Yarn](https://legacy.yarnpkg.com/en/) (optional)

# Usage

<span>
    clone this repository
</span>

```bash
git clone https://github.com/RennanD/dev-projects.git
```

<strong>
    Runing project
</strong>

```bash
yarn install
yarn dev
```

or using npm:

```bash
npm install
npm dev
```

<h3>
    About this project
</h3>

#### HTTP Requests

Created a CRUD using HTTP Requests

!!! POST

</strong> To add projects and add tasks in a projetc!

<strong color="#7159c1">GET - </strong> To list all projects or list specifically one project!

<strong color="#EBA023">UPDATE - </strong> Update one project finded by id!

<strong color="#d34242">UPDATE - </strong> Delete one project finded by id!

#### Middlewares

Created middlewares to help in requests.

Find if a project exists:

```js
checkProject();
```

Find if exists project with same id:

```js
checkExists();
```
