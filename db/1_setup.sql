DROP TABLE IF EXISTS art;

CREATE TABLE art (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    src varchar(1000) NOT NULL,
    songs int
);
