const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
    create: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .save(req.body)
            .then(() => {
                res.send("Created wilder");
            })
            .catch(() => {
                res.send("Error while creating wilder")
            });
    },
    read: (req,res) => {
        dataSource
            .getRepository(Wilder)
            .find(req.body)
            .then(() => {
                res.send(req.body);
        })
        .catch(() => {
            res.send("Error while finding wilders")
        });
    }
};