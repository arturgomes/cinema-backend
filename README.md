# instructions

## install packages
First, install dependencies
```
yarn 
```
or
```
npm run install
```
---

## MongoDB @ Docker
In case you want to run your Docker instance locally, you should
have Docker installed. Then, run:
```
docker compose up -d
```
Otherwise, you can use the `MONGODB_URL` address so you can have a go 
with MongoDB Atlas. 

---

## Run the server

You have to run it as 
```
yarn dev
```
or
```
npm run dev
```

## Run tests

I've created unit tests and integration tests. For integration, I'm using `supertest`, which allows me to make requests (POST, GET, etc)
and to expect some response and evaluate it.

The tests are to be executed using the local instance of mongoDB through docker compose. Please edit the `.env` file in order to comment or uncomment the `PROD` variable -  when commented, the API uses the local instance, otherwise, it uses the remote one.

I tried to put meaningful test cases so I can explore what I learned from testing.

Run tests:
```
yarn test
```
or
```
npm run test
```
