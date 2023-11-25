# 1: file Structure

  **src**

     index [DB Connects]

     App [Config , Cookie,urlencode]

     Constants [enums,DB-Name]
  


1. =>DB
1. =>Models
1. =>Controllers
1. =>Routes
1. =>Middlewares
1. =>Utils  [Helpers in laravel]
1. =>Mode(depends)



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
