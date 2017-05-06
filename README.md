# clearDBProject

How to get Sequelize working with Heroku.

1. You will need heroku cli and sequelize cli to get this work. 
* for heroku cli go to https://devcenter.heroku.com/articles/heroku-cli
* for sequelize cli do `npm install -g sequelize-cli`

2. cd into your project and make sure it is attached as an app in heroku 
3. run `heroku addons:create cleardb:ignite`
4. then run `heroku config | grep CLEARDB_DATABASE_URL`
5. this should give you a database url that looks like this `CLEARDB_DATABASE_URL: mysql://bf85d2fcf03dc5:bd1739f5@us-cdbr-iron-east-03.cleardb.net/heroku_88dd24d3fdc7b54?reconnect=true`
6. Copy this url, you will need it later. 
7. run `sequelize init`
8. in your config file set up so the development, test, and production all point to your remote database. It will look something like this built off of `CLEARDB_DATABASE_URL`
```
{
  "development": {
    "username": "bf85d2fcf03dc5",
    "password": "bd1739f5",
    "database": "heroku_88dd24d3fdc7b54",
    "host": "us-cdbr-iron-east-03.cleardb.net",
    "dialect": "mysql"
  },
  "test": {
    "username": "bf85d2fcf03dc5",
    "password": "bd1739f5",
    "database": "heroku_88dd24d3fdc7b54",
    "host": "127.0.0.1",
    "dialect": "us-cdbr-iron-east-03.cleardb.net"
  },
  "production": {
    "username": "bf85d2fcf03dc5",
    "password": "bd1739f5",
    "database": "heroku_88dd24d3fdc7b54",
    "host": "us-cdbr-iron-east-03.cleardb.net",
    "dialect": "mysql"
  }
}
```
9. Locally you will now be connecting to your remote db. So if you need to see your database in mySQL workbench you will need point mySQL workbench there. 
10. This project will give you some boilerplate to work with, but the models, code and what your app does it all up to you!
