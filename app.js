import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use("/coverage", express.static(path.join(__dirname, "coverage")));

app.get("/", (req, res) => {
  res.status(200).send("Hello, GitHub Actions!");
});

app.get("/me", (req, res) => {
  res.status(200).json({ is_it_me: "yes" });
});

// The new health route
app.get("/health", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "coverage", "index.html"));
});

export default app;
