import { Question, UpdateQuestion } from "../model";
import { db } from "../db";

export const getQuestions = () => {
  const query = db.query("select * from questions");
  const questions = query.all();
  return questions;
};

export const getQuestionById = (question_id: number) => {
  const query = db.query(
    "SELECT * FROM questions WHERE question_id = $question_id"
  );
  const question = query.all({
    $question_id: question_id,
  });
  return question;
};

export const addQuestion = (question: any): void => {
  const {
    question_text,
    option_1,
    option_2,
    option_3,
    option_4,
    correct_answer,
  } = question;
  const query = db.prepare(
    "INSERT INTO questions (question_text, option_1, option_2, option_3, option_4, correct_answer) VALUES ($question_text,$option_1, $option_2, $option_3, $option_4,$correct_answer)"
  );

  return query.run(
    question_text,
    option_1,
    option_2,
    option_3,
    option_4,
    correct_answer
  );
};

export const deleteQuestion = (question_id: number) => {
  const query = db.query(
    "DELETE FROM questions WHERE question_id = $question_id"
  );
  const results = query.all({
    $question_id: question_id,
  });
  return results;
};
