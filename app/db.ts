import { Database } from "bun:sqlite";
export const db = new Database(":question_db:");

// const initialQuery = db.query(`
// CREATE TABLE questions (
//     question_id INTEGER PRIMARY KEY,
//     question_text TEXT NOT NULL,
//     option_1 TEXT NOT NULL,
//     option_2 TEXT NOT NULL,
//     option_3 TEXT NOT NULL,
//     option_4 TEXT NOT NULL,
//     correct_answer TEXT NOT NULL
//  );`);
// initialQuery.get();
