import sql from 'better-sqlite3';
// import meals from ''

const db = sql("meals.db");

export async function getMeals() {
await new Promise((resolve) => setTimeout(resolve, 2000));
// throw new Error("loading failed!") // to create an error
   return db.prepare("SELECT * FROM meals").all();
}

// export default getMeals;