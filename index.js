const express = require("express");
const work = require("./utils/work");
const project = require("./utils/project");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "pages/contact.html"));
});

app.get("/work", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "pages/work.html"));
});

app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "pages/project.html"));
});

app.get("/work/:id", (req, res) => {
  const workId = req.params.id;
  const workData = work[workId];
  if (workData === undefined) {
    res.status(404).sendFile(path.join(__dirname, "views", "pages/404.html"));
  } else {
    res.render("work", { work: workData });
  }
});

app.get("/project/:id", (req, res) => {
  const projectId = req.params.id;
  const projectData = project[projectId];
  if (projectData === undefined) {
    res.status(404).sendFile(path.join(__dirname, "views", "pages/404.html"));
  } else {
    res.render("project", { project: projectData });
  }
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "pages/404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
