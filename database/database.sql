CREATE DATABASE perndatabase;

CREATE TABLE perntable(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    priority INT,
    completed BOOLEAN,
    date VARCHAR(255)
);