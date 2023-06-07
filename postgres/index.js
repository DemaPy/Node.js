const express = require("express")
const userRouter = require("./routes/user.routes")
const postRouter = require("./routes/post.routes")

const app = express()

const PORT = 4200
app.use(express.json())

app.use('/api', userRouter)
app.use('/api', postRouter)


app.listen(PORT, () => {
    console.log("Server started at port: " + PORT, `http://localhost:${PORT}`)
})