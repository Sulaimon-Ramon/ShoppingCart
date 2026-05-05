
export const CREATE_PRODUCTS_TABLES = ` create table if not exists products (
id integer primary key,
name text not null,
price real not null,
rating real not null,
category text not null,
reviews integer not null,
emoji text not null,
description text not null,
badge text,
stock integer not null
);`;


export const CREATE_CART_TABLES = `
create table if not exists cart (
id integer primary key,
name text not null,
category text not null,
price real not null,
emoji text,
quantity integer not null default 1,
added_at date default(datetime('now'))
);
`;




export const INSERT_PRODUCT = `
insert into products
(id, name, category, reviews, emoji, price, badge, description, rating, stock)
values (?,?,?,?,?,?,?,?,?,?)
`;

export const SELECT_ALL_CART = `select * from cart order by added_at ASC;`;
export const SELECT_CART_ITEM = `select * from cart where id = ?;`;
export const SELECT_ALL_PRODUCTS = `select * from products;`;


export const CART_ADD_NEW_ITEM = `insert into cart (id, name, category, price, emoji, quantity)
values
(?,?,?,?,?,1);`;

export const COUNT_PRODUCTS = `select count(*) as count from products;`;


export const CART_INCREMENT = `update cart set quantity = quantity + 1 where id = ?;`;
export const CART_DECREMENT = `update cart set quantity = quantity - 1 where id = ?;`;
export const CART_REMOVE_ZERO = `delete from cart where quantity <= 0;`;
export const CART_CLEAR = `delete from cart;`;