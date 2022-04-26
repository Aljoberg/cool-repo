const express = require("express")
const app = express()

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})


app.get("/", (req, res) => res.send('【 ⭕✘-ᴘᴀɪɴ 】 is Alive!'))