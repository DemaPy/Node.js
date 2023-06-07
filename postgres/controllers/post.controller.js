const db = require("../db")



class PostController {
    async createPost (req, res) {
        const { title, content, user_id } = req.body
        const newPost = await db.query("INSERT INTO post (title, content, user_id) VALUES ($1,$2,$3) RETURNING *",[title, content, user_id])
        res.json(newPost.rows[0])
    }

    async getPosts (req, res) {
        const {id} = req.query
        const posts = await db.query("SELECT * FROM post WHERE user_id=$1", [id])
        if (posts.rows.length) {
            res.json(posts.rows)
        } else {
            res.send("error")
        }
    }

    async deletePost (req, res) {
        const {id} = req.query
        const {rowCount} = await db.query("DELETE FROM post WHERE id = $1", [id])
        if (rowCount) {
            res.send("success")
        } else {
            res.send("error")
        }
    }

    async getPost(req, res) {
        const {rows} = await db.query("SELECT * FROM post")
        if (rows.length) {
            res.json(rows)
        } else {
            res.send("error")
        }
    }

    async updatePost (req, res) {
        const {id} = req.query
        const {title, content} = req.body
        const {rows} = await db.query("UPDATE post SET title = $2, content = $3 WHERE id = $1 RETURNING *", [id, title, content])
        if (rows.length) {
            res.json(rows[0])
        } else {
            res.send("error")
        }
    }
}



module.exports = new PostController()