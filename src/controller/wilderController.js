const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder")
const Skill = require("../entity/Skill")
module.exports = {
    create: async (req, res) => {
        try {
            await dataSource
            .getRepository(Wilder)
            .save(req.body);
            res.send("Created wilder");
            
        } catch(error) {
            console.log(error);
            res.send("Error while creating wilder");
            }
    },
    read: async (req, res) => {
        try {
            const data = await dataSource
            .getRepository(Wilder)
            .find()      
            res.send(data);
        } catch(error) {
                res.send("Error while creating wilder");
            }
    },
    update: async (req, res) => {
        try {
            await dataSource
            .getRepository(Wilder)
            .update(req.body.id, req.body.newData)
            
                res.send("updated");
        }catch(error) {
                res.send("Error while creating wilder");
            }
    },
    delete: async (req, res) => {
        try {
            await dataSource
            .getRepository(Wilder)
            .delete(req.body)
                res.send("deleted");
        }catch(error) {
                res.send("Error while creating wilder");
            }
    },
    addSkill: async (req, res) => {
        try {
            const wilderToUpdate = await dataSource
            .getRepository(Wilder)
            .findOneBy({name: req.body.wilderName});
            console.log(wilderToUpdate);

            const skillToAdd = await dataSource
            .getRepository(Skill)
            .findOneBy({name: req.body.skillName});

            wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
            await dataSource.getRepository(Wilder).save(wilderToUpdate)
            res.send("Skill added to wilder");

        }catch(error) {
                res.send("Error while creating skill");
            }
    }
}