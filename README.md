# todolist-express-api

## Set Up Instructions
1. Clone down and `npm install`
2. These instructions assume you are running Postgres on your localhost (127.0.0.1) on port 5432 
3. Create a Database called `todo`. It doesn't matter if you create it via `psql` or Table Plus.
4. Double check the `dbconfig.js` and the `knexfile.js` files. These two files needs to have the correct Postgres username and password for your computer. On my computer, the user is `postgres` and there is no password. You may have to change it for your Postgres. 
5. Open the file in the `/migration` folder and interalize the code. This is the file that will create our table in the next step.
6. You installed knex when you ran `npm install`. Run `knex migrate:latest` to run this migration which creates a `tasks` table in your `todo` database. Inspect your database to ensure this was run successfully. 
7. Open the file in the `/seeds` folder and interalize the code. This is the file that will populate our table in the next step.
8. Run `knex seed:run` to fill the database with data. Inspect your table to ensure this was run successfully. 
9. Finally run `npm start` to start the API server. 

## API Documentation

### `Get` `/` 
* Responds with status code 200 and object `{"message": "This is an API"}`

### `GET` `/tasks` 
* Responds with status code 200 and a JSON array of all tasts.

### `GET` `/tasks/:id` 
* Responds with status code 200 and a JSON object of a single task.
* If task is not found, responds with status code 404.

### `POST` `/tasks`
* Creates a new task and responds with status code 201 and a JSON object of the new task.
* Requires a request body with properties:
```
{
    "title" : "my task",
    "description" : "my description"
}
```
* If body is incomplete, responds with status code 400.

### `PUT` `/tasks/:id`
* Updates the title and description of an existing task and responds with status code 200 and the updated task.
* Requires a request body with properties:
```
{
    "title" : "my task",
    "description" : "my description"
}
```
* If body is incomplete, responds with status code 400.
* If task is not found, responds with status code 404. 

### `PATCH` `/tasks/:id/complete`
* Marked a task as completed and responds with status code 200 and the completed task.
* If task is not found, responds with status code 404.

### `DELETE` `/tasks/:id`
* Deletes a task and responds with status code 204.
* If task is not found, responds with status code 404.
