create table products
(
    id    int auto_increment,
    name  varchar(200),
    price int default 0 not null,
    primary key (id)
);

INSERT INTO playground.products (name, price)
VALUES ('Handy', 1299);
INSERT INTO playground.products (name, price)
VALUES ('Fernseher', 599);
INSERT INTO playground.products (name, price)
VALUES ('Waschmaschine', 899);
INSERT INTO playground.products (name, price)
VALUES ('Wasserkocher', 34);
