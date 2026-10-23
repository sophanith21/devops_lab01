import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, GitHub Actions!");
});

app.get("/me", (req, res) => {
  res.status(200).json({ is_it_me: "yes" });
});

export default app;
