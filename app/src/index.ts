import { Hono } from "hono";
import { cors } from "hono/cors";

import {
  addQuestion,
  deleteQuestion,
  getQuestionById,
  getQuestions,
} from "./db-handler";

const app = new Hono();

app.use("/*", cors());

app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  })
);

app.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.get("/questions", (c) => {
  return c.json(getQuestions());
});

app.get("/questions/:id", async (c) => {
  const id = await parseInt(c.req.param("id"));
  return c.json(getQuestionById(id));
});

app.delete("/questions/:id/delete", async (c) => {
  const id = await parseInt(c.req.param("id"));
  deleteQuestion(id);
  return c.json({ message: "Question has been deleted successfully" }, 200);
});

app.put("/questions/:id/update", async (c) => {
  const id = parseInt(c.req.param("id"));
  const param = await c.req.json();

  const {
    question_text,
    option_1,
    option_2,
    option_3,
    option_4,
    correct_answer,
  } = param;
  const editedQuestion = {
    question_text,
    option_1,
    option_2,
    option_3,
    option_4,
    correct_answer,
  };
  console.log(editedQuestion);

  return c.json({ message: "Question has been edited successfully" }, 200);
});

app.post("/questions/add", async (c) => {
  const param = await c.req.json();
  const {
    question_text,
    option_1,
    option_2,
    option_3,
    option_4,
    correct_answer,
  } = param;

  const newQuestion = {
    question_text,
    option_1,
    option_2,
    option_3,
    option_4,
    correct_answer,
  };

  addQuestion(newQuestion);
  return c.json(
    { message: "Question has been added successfully to database" },
    200
  );
});

export default app;
