import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static assets
app.use(express.static(path.join(__dirname, "public")));

// routes to pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "pages", "index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "pages", "about.html")));
app.get("/services", (req, res) => res.sendFile(path.join(__dirname, "pages", "services.html")));
app.get("/booking", (req, res) => res.sendFile(path.join(__dirname, "pages", "booking.html")));
app.get("/blog", (req, res) => res.sendFile(path.join(__dirname, "pages", "blog.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "pages", "contact.html")));

// 404
app.use((req, res) => res.status(404).send("Page not found"));

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
