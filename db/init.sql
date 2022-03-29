DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (id SERIAL PRIMARY KEY, title TEXT, description TEXT, completed BOOLEAN);

INSERT INTO tasks (title, description, completed) VALUES
('Wake up', 'Don''t over sleep', true),
('Eat lunch', 'Yummy!', false),
('Walk dog', 'I need to stop fostering', false),
('L & D', 'I need to prep', false),
('Walk Khalo', 'During lunch', false),
('Take care of the baby', 'During lunch', false),
('Lead Code Challenge', 'Fellows need to get their act together', true);