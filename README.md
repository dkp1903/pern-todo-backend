> Project : Backend for a PERN Stack Todo application to allow users to create, read, update and delete Todos

> Tech Stack : 
> - Database : PostgreSQL
> - Backend : Node - Express

> Also included in the repo : [Block diagram](./pern-todo.pdf)

> Time taken : 6 hours

> Salient Features : 
> - User can add todo with a priority level, with a timestamp given automatically.
> - User can update todo - either edit the info, change its priority or mark it completed.
> - Async await has been used for better performance
> - Users can search and filter todos via partial and full text search of description, timestamp, via priority, or via state(completed or pending)
> - Major Libraries used : Express, CORS, PG

> Assumptions(Major) : 
> - Separate routes for search via Priority, Description, Date and State
> - Todo can be marked completed via update, but this won't delete them from the database. User gets to choose when she wants to delete them from the DB. This is a functionality I have seen in Google Keep, Google Tasks, Todoist, etc.

> Approach
> 1. Necessary installation of Postgres
> 2. Block diagram created to have a better overview of solution - routes decided
> 3. Creation of CRUD routes
> 4. Add routes for search functionality
> 5. Code refactoring

> DB Schema
> - Todo_id | Description | Priority | Completed status | Timestamp
> - Setup scripts given in [file](./database/database.sql)

> Steps to run application
> - Clone repo
> - Create a .env file in the root directory and add
POSTGRES_USERNAME = "postgres"
PASSWORD = your-postgres-master-password
> - Run 
`
nodemon index
`
in the command line
> - Use postman to test the APIs.

> A video I have made focusing on the working on the app is [linked here](https://www.loom.com/share/94c0cc5b57e5404ba97235dffa0ee352)
