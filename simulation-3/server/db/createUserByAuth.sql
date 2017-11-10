INSERT INTO sim_users (authid)
VALUES ($1) RETURNING authid;
