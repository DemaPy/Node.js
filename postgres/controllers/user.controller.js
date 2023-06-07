const db = require("../db")


class UserController {
    async createUser (req, res) {
        console.log(req.body)
        const {name, surname} = req.body
        console.log(name, surname)
        const newPerson = await db.query("INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *", [name, surname])
        res.json(newPerson.rows[0])
    }

    async getUser(req, res) {
        const {id} = req.params
        const {rows} = await db.query("SELECT * FROM person WHERE id=$1", [id])
        if (rows.length) {
            res.json(rows[0])
        } else {
            res.send("error")
        }
    }

    async getUsers(req, res) {
        const users = await db.query("SELECT * FROM person")
        res.json(users.rows)
    }

    async deletUser(req, res) {
        const {id} = req.params
        const {rowCount} = await db.query("DELETE FROM person WHERE id=$1", [id])
        if (rowCount) {
            res.send("success")
        } else {
            res.send("error")
        }
    }

    async updateUser(req, res) {
        const {name, surname, id} = req.body
        const {rows} = await db.query("UPDATE person set name = $1, surname = $2 WHERE id = $3 RETURNING *", [name, surname, id])
        if (rows.length) {
            res.json(rows[0])
        } else {
            res.send("error")
        }
    }
}

module.exports = new UserController()