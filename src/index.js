const express = require("express");
const dataSource = require("./utils").dataSource;
const WilderController = require("./controller/wilderController");
const SkillController = require("./controller/skillController")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/api/wilder", WilderController.create);
app.get("/api/wilder", WilderController.read);
app.put("/api/wilder", WilderController.update);
app.delete("/api/wilder", WilderController.delete);
app.put("/api/addSkill", WilderController.addSkill)

app.post("/api/skill", SkillController.create);
app.get("/api/skill", SkillController.read);
app.put("/api/skill", SkillController.update);
app.delete("/api/skill", SkillController.delete);


app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that !");
})

const start = async () => {
    await dataSource.initialize();
    app.listen(3000, () => console.log("Server started on 3000"));
}
start(); 