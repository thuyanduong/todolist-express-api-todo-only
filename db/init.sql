DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT);

INSERT INTO users (name) VALUES ('Ann'), ('Reuben'), ('Maya');

CREATE TABLE tasks (id SERIAL PRIMARY KEY, title TEXT, description TEXT, completed BOOLEAN, user_id INT REFERENCES users(id));

INSERT INTO tasks (title, description, completed, user_id) VALUES
('Wake up', 'Don''t over sleep', true, 1),
('Eat lunch', 'Yummy!', false, 1),
('Walk dog', 'I need to stop fostering', false, 1),
('L & D', 'I need to prep', false, 3),
('Walk Khalo', 'During lunch', false, 3),
('Take care of the baby', 'During lunch', false, 2),
('Lead Code Challenge', 'Fellows need to get their act together', true, 2);