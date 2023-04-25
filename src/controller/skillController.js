const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill")
module.exports = {
    create: async (req, res) => {
        try {
            await dataSource
            .getRepository(Skill)
            .save(req.body);
            res.send("Created skill");
            
        } catch(error) {
            console.log(error);
            res.send("Error while creating skill");
            }
    },
    read: async (req, res) => {
        try {
            const data = await dataSource
            .getRepository(Skill)
            .find()      
            res.send(data);
        } catch(error) {
                res.send("Error while creating Skill");
            }
    },
    update: async (req, res) => {
        try {
            await dataSource
            .getRepository(Skill)
            .update(req.body.id, req.body.newData)
                res.send("updated");
        }catch(error) {
                res.send("Error while creating Skill");
            }
    },
    delete: async (req, res) => {
        try {
            await dataSource
            .getRepository(Skill)
            .delete(req.body)
            .then(() => {
                res.send("deleted");
            })
        }catch(error) {
                res.send("Error while creating Skill");
            }
    }
}