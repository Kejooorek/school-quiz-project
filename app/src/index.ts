import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ name: "Robert" });
});

export default app;
