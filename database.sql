CREATE DATABASE perntododatabase;

CREATE TABLE perntodotable(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    priority INT,
    date timestamp
);