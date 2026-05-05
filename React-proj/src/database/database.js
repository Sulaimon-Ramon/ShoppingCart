import products from "../data/product";
import { CART_ADD_NEW_ITEM, CART_CLEAR, CART_DECREMENT, CART_INCREMENT, CART_REMOVE_ZERO, COUNT_PRODUCTS, CREATE_CART_TABLES, CREATE_PRODUCTS_TABLES, INSERT_PRODUCT, SELECT_ALL_CART, SELECT_CART_ITEM } from "./queries";
// import products from "../data/product";


let db = null;

// ______INITIALIZING DATABASE_______

const persist = () => {
    try {
        const data = db.export();
        let binary = '';
        const len = data.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(data[i]);
        }
        const b64 = btoa(binary);
        localStorage.setItem("sqliteDb", b64);
    } catch (e) {
        console.error("Failed to persist database:", e);
    }
}


const loadPersisted = (SQL) => {
    const b64 = localStorage.getItem("sqliteDb");
    if(!b64) return null;
    try {
        const binary = atob(b64);
        const buf = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i++) buf[i] = binary.charCodeAt(i);
        return new SQL.Database(buf);
    } catch (e) {
        console.error("Failed to load persisted database:", e);
        localStorage.removeItem("sqliteDb");
        return null;
    }
}

export const initDB = async () => {
    if(db) return db
    const initSqlJs = window.initSqlJs;
    if(!initSqlJs) throw new Error("sql.js not loaded - check the CDN <script> in index.html")
    const SQL = await initSqlJs({
        locateFile: () => window.SQL_WASM_URL,
    })

    const existingDb = loadPersisted(SQL);
    if (existingDb) {
        console.log("Loaded existing database from localStorage");
        db = existingDb;
    } else {
        console.log("Creating new database");
        db = new SQL.Database();
    }

    // CREATE TABLES

    db.run(CREATE_PRODUCTS_TABLES);
    db.run(CREATE_CART_TABLES);

    const count = toRows(db.exec(COUNT_PRODUCTS));
    console.log("Product count:", count);
    const isEmpty = !count.length || count[0].count === 0;

    if (isEmpty) {
      console.log("Inserting products...");
      products.forEach((p) => {
        db.run(INSERT_PRODUCT, [
          p.id, p.name, p.category, p.reviews, p.emoji, p.price, p.badge ?? null, p.description, p.rating, p.stock
        ]);
      });
    }

    await persist()
    console.log("Database initialized");
    return db;
}


// _____cart operations_____

const toRows = (results) => {
    if (!results.length) return []
    const{columns, values} = results[0]
    return values.map((row) => 
        Object.fromEntries(columns.map((col, i) => [col, row[i]])));
}

export const getCart = () => {
    const results = db.exec(SELECT_ALL_CART);
    return toRows(results);
}


export const addToCart = (products) => {
    console.log("Adding to cart:", products);
    const existing = toRows(db.exec(SELECT_CART_ITEM, [products.id]));
    console.log("Existing item:", existing);
    if(existing.length){
        db.run(CART_INCREMENT, [products.id])
    }else{
        db.run(CART_ADD_NEW_ITEM, [products.id, products.name, products.category, products.price, products.emoji])
    }
    persist();
    const cart = getCart();
    console.log("Cart after add:", cart);
    return cart;
}


export const incrementItem = (id) => {
    db.run(CART_INCREMENT, [id]);
    persist();
    return getCart();
}


export const decrementItem = (id) => {
    db.run(CART_DECREMENT, [id]);
    db.run(CART_REMOVE_ZERO);
    persist();
    return getCart();
}


export const clearCart = () => {
   db.run(CART_CLEAR);
   persist();
   return [];
}