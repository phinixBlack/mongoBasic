# 1: file Structure
 src

     index [DB Connects]

     App [Config , Cookie,urlencode]

     Constants [enums,DB-Name]
  


=>DB

=>Models

=>Controllers

=>Routes

=>Middlewares

=>Utils  [Helpers in laravel]

=>Mode(depends)



# 2:  Project setup 
-1: npm init

-2: change the path in package.json 
       "main": "index.js",
       "scripts": {
           "start": "node index.js"
        },

-3: npm start

-4: npm install express
https://expressjs.com/en/5x/api.html

// every time when you have done some changes you need to restart server

-5: npm i dotenv
    .env

-6: npm i mongoose
