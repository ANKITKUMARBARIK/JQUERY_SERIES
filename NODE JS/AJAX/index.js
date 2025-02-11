require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("AJAX Connection Server")
})

const github = {
    "login": "ANKITKUMARBARIK",
    "id": 157503070,
    "node_id": "U_kgDOCWNOXg",
    "avatar_url": "https://avatars.githubusercontent.com/u/157503070?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ANKITKUMARBARIK",
    "html_url": "https://github.com/ANKITKUMARBARIK",
    "followers_url": "https://api.github.com/users/ANKITKUMARBARIK/followers",
    "following_url": "https://api.github.com/users/ANKITKUMARBARIK/following{/other_user}",
    "gists_url": "https://api.github.com/users/ANKITKUMARBARIK/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ANKITKUMARBARIK/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ANKITKUMARBARIK/subscriptions",
    "organizations_url": "https://api.github.com/users/ANKITKUMARBARIK/orgs",
    "repos_url": "https://api.github.com/users/ANKITKUMARBARIK/repos",
    "events_url": "https://api.github.com/users/ANKITKUMARBARIK/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ANKITKUMARBARIK/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ankit Barik",
    "company": "SHREE SHYAM AUTO CONSULTANT",
    "blog": "",
    "location": "INDIA",
    "email": null,
    "hireable": null,
    "bio": "ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ᴀɴᴏɴʏᴍᴏᴜꜱ DΞV ⚠️",
    "twitter_username": "synCodx",
    "public_repos": 40,
    "public_gists": 0,
    "followers": 6,
    "following": 0,
    "created_at": "2024-01-23T14:40:14Z",
    "updated_at": "2025-01-27T08:52:22Z"
}
app.get('/api', (req, res) => {
    res.json(github)
})

app.get('/index1', (req, res) => {
    res.sendFile('index1.html', { root: __dirname })
})

app.listen(process.env.PORT, () => {
    console.log("Server connection successfully ", port)
})