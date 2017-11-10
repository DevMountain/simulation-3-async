INSERT INTO users (authId, name)
VALUES ($1, $2) RETURNING authId, name;
