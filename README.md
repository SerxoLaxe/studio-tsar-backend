# studio-tsar-backend

CRUD REST API for a tattoo studio CRM app written in Javascript, using Express as server framework and Mysql as database, interfacing with it using Sequelize.
The project structure follows this modular approach:


    .
    ├── api/
    │   ├── routes                          Routes for main components
    │   ├── services                        Services commom to multiple components
    │   └── components/
    │       └── studios/
    │           ├── routes.js                Routes for this level of elements
    │           ├── services.js              Services used by controllers and components contained
    │           ├── validations.js           Validations used by elements contained
    │           ├── middlewares.js
    │           ├── controllers/
    │           │   ├── create/
    │           │   │   ├── index.js         Contains the express handler middleware
    │           │   │   ├── service.js       Services only used on this controller
    │           │   │   └── validation.js    Validations only applied to this controller
    │           │   ├── edit/
    │           │   │   ├── index.js
    │           │   │   ├── service.js
    │           │   │   └── validation.js
    │           │   ├── getById
    │           │   ├── search
    │           │   └── ...
    │           └── components/
    │               └── projects/
    │                   ├── routes.js
    │                   ├── services.js
    │                   ├── validations.js
    │                   ├── middlewares.js
    │                   ├── controllers/
    │                   │   └── .../
    │                   │       └── edit
    |                   |       └── ...
    │                   └── components/
    │                       └── .../
    │                           └── ...
    ├── models/
    │   ├── users.js
    │   ├── clients.js
    │   ├── bills.js
    │   ├── documents.js
    │   ├── photos.js
    │   ├── index.js
    │   ├── init-models,js
    │   └── ...
    ├── tests/
    │   └── ...
    ├── ...
    ├── ...
    └── server.js

For example, the correspondig route for the controller *edit*, under the subcomponent *projects* and under the component *studios* could be something like:

>http://host:port/api/studios/_studioId_/projects/_projectId_/edit


![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
